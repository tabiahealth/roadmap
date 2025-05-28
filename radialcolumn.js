// Function to create a radial column chart
function createRadialColumnChart(data, containerId, firstProp, secondProp, firstLabel, secondLabel) {
    // Configure dimensions
    const width = 1260;
    const height = 1260;
    const innerRadius = 180;
    const outerRadius = Math.min(width, height) / 2 - 60;

    // Clear the container if content already exists
    d3.select("#" + containerId).html("");

    // Create the SVG container
    const svg = d3.select("#" + containerId)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    // Extract categories and create x scale
    const categories = data.map(d => d.category);
    const x = d3.scaleBand()
        .domain(categories)
        .range([0, Math.PI])
        .padding(0.1);

    // Find the maximum value for the y scale (now based on the number of items in each array)
    const maxValue = d3.max(data, d => Math.max(d[firstProp].length, d[secondProp].length));
    const y = d3.scaleRadial()
        .domain([0, maxValue])
        .range([innerRadius, outerRadius]);

    // Create color scale
    const color = d3.scaleOrdinal()
        .domain([firstProp, secondProp])
        .range(["#4e79a7", "#f28e2c"]);

    // The labels for the columns were removed because there is already a legend in the chart

    // Add labels for categories in the outer circle
    svg.append("g")
        .selectAll("g")
        .data(categories)
        .enter()
        .append("g")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            // Position at the center of the category
            const angle = x(d) + x.bandwidth() / 2 - Math.PI/2;
            // Position closer to the outer radius (reduced from 20 to 5)
            return `rotate(${angle * 180 / Math.PI}) translate(0,${-outerRadius - 5})`;
        })
        .append("text")
        .text(d => d)
        .attr("transform", function(d) {
            const angle = x(d) + x.bandwidth() / 2 - Math.PI/2;
            // Rotate the text to make it readable
            let rotation = 0;
            if (angle > 0 && angle < Math.PI) {
                rotation = 90 - angle * 180 / Math.PI;
            } else {
                rotation = 270 - angle * 180 / Math.PI;
            }
            return `rotate(${rotation})`;
        })
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#333");

    // Add y-axis (values)
    const yAxis = svg.append("g");

    // Add circular grid lines
    const yTicks = y.ticks(5);
    yAxis.selectAll(".grid-circle")
        .data(yTicks)
        .enter()
        .append("circle")
        .attr("class", "grid-circle")
        .attr("r", d => y(d))
        .attr("fill", "none")
        .attr("stroke", "#e0e0e0")
        .attr("stroke-dasharray", "4,4");

    // Add labels for y-axis values
    yAxis.selectAll(".y-label")
        .data(yTicks)
        .enter()
        .append("text")
        .attr("class", "y-label")
        .attr("y", d => -y(d))
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(d => d)
        .style("font-size", "10px");

    // Create tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Function to create bars
    function createBars(data, key, offset, color, label) {
        const barWidth = x.bandwidth() / 2 * 0.9; // Bar width (half of the available space)

        svg.append("g")
            .selectAll("path")
            .data(data)
            .enter()
            .append("path")
            .attr("fill", color)
            .attr("d", d => {
                const startAngle = x(d.category) + offset;
                const endAngle = startAngle + barWidth;

                const arc = d3.arc()
                    .innerRadius(innerRadius)
                    .outerRadius(y(d[key].length)) // Use the array length to determine the bar height
                    .startAngle(startAngle - Math.PI/2)
                    .endAngle(endAngle - Math.PI/2);

                return arc();
            })
            .style("opacity", 0.8)
            .on("mouseover", function(event, d) {
                d3.select(this).style("opacity", 1);

                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);

                // Create an HTML list with the item names
                const itemList = d[key].map(item => `<li>${item}</li>`).join('');

                tooltip.html(`<strong>${d.category}</strong><br>${label}:<ul style="margin: 5px 0; padding-left: 20px;">${itemList}</ul>`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function() {
                d3.select(this).style("opacity", 0.8);

                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    }

    // Create bars for the first property
    createBars(data, firstProp, 0, color(firstProp), firstLabel);

    // Create bars for the second property
    createBars(data, secondProp, x.bandwidth() / 2, color(secondProp), secondLabel);

    // Add legend
    const legend = svg.append("g")
        .attr("transform", `translate(${-width/4}, ${-height/2 + 40})`);

    const legendData = [
        { key: firstProp, label: firstLabel },
        { key: secondProp, label: secondLabel }
    ];

    // Add explanatory text below the legend
    legend.append("text")
        .attr("x", 0)
        .attr("y", 60)
        .text("* The height of the bars represents the number of clients")
        .style("font-size", "12px")
        .style("font-style", "italic");

    legend.selectAll("rect")
        .data(legendData)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", (d, i) => i * 25)
        .attr("width", 20)
        .attr("height", 20)
        .attr("fill", d => color(d.key));

    legend.selectAll(".legend-text")
        .data(legendData)
        .enter()
        .append("text")
        .attr("class", "legend-text")
        .attr("x", 30)
        .attr("y", (d, i) => i * 25 + 15)
        .text(d => d.label)
        .style("font-size", "14px");
}
