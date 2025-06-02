// Function to create a roadmap chart
function createRoadmapChart(data, containerId) {
    // Configure dimensions
    const width = 1260;
    const height = 1260;
    const radius = Math.min(width, height) / 2;

    // Create color scale
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

    // Clear the container if content already exists
    d3.select("#" + containerId).html("");

    // Create the SVG container
    const svg = d3.select("#" + containerId)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create the partition layout
    const partition = d3.partition()
        .size([Math.PI, radius]);

    // Convert data to hierarchy
    const root = d3.hierarchy(data)
        .sum(d => d.value || 0)
        .sort((a, b) => b.value - a.value);

    // Calculate the partition layout
    partition(root);

    // Create arc generator
    const arc = d3.arc()
        .startAngle(d => d.x0 - Math.PI/2)  // Rotate to start from the left
        .endAngle(d => d.x1 - Math.PI/2)    // Rotate to end at the right
        .innerRadius(d => d.y0)
        .outerRadius(d => d.y1);

    // Create tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Add slices
    const slice = svg.selectAll("g")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "slice");

    // Add paths
    slice.append("path")
        .attr("d", arc)
        .style("fill", d => {
            // Get the original color based on parent category
            let originalColor;
            let tempD = d;
            while (tempD.depth > 1) tempD = tempD.parent;
            originalColor = color(tempD.data.name);

            // If planned, mix the original color with gray
            if (d.data.planned) {
                // Use d3.interpolateRgb to blend the original color with gray
                return d3.interpolateRgb(originalColor, "#808080")(0.7); // 70% gray, 30% original color
            } else {
                return originalColor;
            }
        })
        .style("stroke", "white")
        .style("stroke-width", "1px")
        .style("opacity", d => d.data.planned ? 0.4 : 0.8) // Lower opacity for planned items
        .on("mouseover", function(event, d) {
            d3.select(this).style("opacity", d.data.planned ? 0.7 : 1); // Still show difference on hover

            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);

            // Add indication if item is planned
            const plannedText = d.data.planned ? "<br><em>(Planned)</em>" : "";
            tooltip.html(`<strong>${d.data.name}</strong>${plannedText}<br>Value: ${d.value}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(event, d) {
            d3.select(this).style("opacity", d.data.planned ? 0.4 : 0.8);

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Add labels
    slice.append("text")
        .attr("transform", function(d) {
            // Adjust rotation calculation for the half-circle layout
            const x = (d.x0 + d.x1) / 2 - Math.PI/2;  // Adjust for arc rotation
            const y = (d.y0 + d.y1) / 2;

            // If it's the root element (d.depth === 0), keep the text horizontal
            if (d.depth === 0) {
                return `translate(${arc.centroid(d)}) rotate(0)`;
            }

            // For other elements, maintain the current radial orientation
            // Calculate the angle for radial orientation (perpendicular to the arc)
            // Additional 90 degrees makes the text follow the radial direction (from center outward)
            let rotation = (x * 180 / Math.PI) + 90;

            // Ensure that the text is always readable from inside out
            // Adjust the rotation so that the text is never upside down
            // when viewed from the center outward
            if (rotation > 90 && rotation < 270) {
                rotation += 180;  // Rotate 180 degrees for texts that would be upside down
            }

            return `translate(${arc.centroid(d)}) rotate(${rotation})`;
        })
        .attr("text-anchor", "middle")  // Center the text in the segment
        .attr("dy", "0.35em")
        .text(function(d) {
            // Show text only if the slice is large enough
            return (d.x1 - d.x0) > 0.08 ? d.data.name : ""; // Reduced threshold to show more labels
        })
        .style("fill", "white")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("text-shadow", "0px 0px 3px rgba(0,0,0,0.7)") // Add text shadow for better contrast
        .style("pointer-events", "none");
}
