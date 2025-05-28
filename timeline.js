// Function to create a timeline chart
function createTimelineChart(data, containerId) {
    // Configure dimensions
    const width = 1260;
    const height = 400;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear the container if content already exists
    d3.select("#" + containerId).html("");

    // Create the SVG container
    const svg = d3.select("#" + containerId)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Find the date of the last non-future milestone
    const presentEndDate = new Date(2025, 4, 31); // May 31, 2025

    // Find the date of the last future milestone
    const futureEndDate = new Date(2026, 3, 30); // April 30, 2026

    // Define time scale
    const timeScale = d3.scaleTime()
        .domain([new Date(2024, 0, 1), futureEndDate]) // Jan 1, 2024 to April 30, 2026
        .range([0, innerWidth]);

    // Create x-axis
    const xAxis = d3.axisBottom(timeScale)
        .ticks(d3.timeMonth.every(2))
        .tickFormat(d3.timeFormat("%b %Y"));

    // Add x-axis to the chart
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

    // Calculate the x-coordinate for the present/future boundary
    const presentEndX = timeScale(presentEndDate);

    // Add a solid horizontal line for the present timeline
    svg.append("line")
        .attr("x1", 0)
        .attr("y1", innerHeight / 2)
        .attr("x2", presentEndX)
        .attr("y2", innerHeight / 2)
        .attr("stroke", "#ccc")
        .attr("stroke-width", 2);

    // Add a dotted horizontal line for the future timeline
    svg.append("line")
        .attr("x1", presentEndX)
        .attr("y1", innerHeight / 2)
        .attr("x2", innerWidth)
        .attr("y2", innerHeight / 2)
        .attr("stroke", "#ccc")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "5,5"); // This creates the dotted line

    // Create tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Add milestone circles
    const milestones = svg.selectAll(".milestone")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "milestone")
        .attr("transform", d => `translate(${timeScale(d.date)},${innerHeight / 2})`);

    // Add circles for milestones
    milestones.append("circle")
        .attr("r", 10)
        .attr("fill", d => d.future ? "#f28e2c" : "#4e79a7") // Different color for future milestones
        .attr("stroke", "#fff")
        .attr("stroke-width", 2)
        .style("stroke-dasharray", d => d.future ? "2,2" : "none") // Dotted stroke for future milestones
        .on("mouseover", function(event, d) {
            d3.select(this).attr("r", 12);

            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);

            let status = d.future ? "Future Milestone" : "Current Milestone";
            tooltip.html(`<strong>${d.milestone}</strong><br>${d.date.toLocaleDateString()}<br>${d.description}<br><em>${status}</em>`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            d3.select(this).attr("r", 10);

            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Add milestone labels
    milestones.append("text")
        .attr("y", d => (data.indexOf(d) % 2 === 0) ? -20 : 30) // Alternate above and below
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .text(d => d.milestone)
        .style("font-size", "12px")
        .style("font-weight", "bold");

    // Add milestone dates
    milestones.append("text")
        .attr("y", d => (data.indexOf(d) % 2 === 0) ? -40 : 50) // Alternate above and below
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .text(d => d.date.toLocaleDateString())
        .style("font-size", "10px");

    // Add title
    svg.append("text")
        .attr("x", innerWidth / 2)
        .attr("y", -20)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .text("Product Timeline");

    // Add legend
    const legend = svg.append("g")
        .attr("transform", `translate(${innerWidth - 200}, 20)`);

    // Current milestone legend item
    legend.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 6)
        .attr("fill", "#4e79a7")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1);

    legend.append("text")
        .attr("x", 15)
        .attr("y", 4)
        .text("Current Milestone")
        .style("font-size", "12px");

    // Future milestone legend item
    legend.append("circle")
        .attr("cx", 0)
        .attr("cy", 20)
        .attr("r", 6)
        .attr("fill", "#f28e2c")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .style("stroke-dasharray", "2,2");

    legend.append("text")
        .attr("x", 15)
        .attr("y", 24)
        .text("Future Milestone")
        .style("font-size", "12px");

    // Timeline legend
    const timelineLegend = svg.append("g")
        .attr("transform", `translate(${innerWidth - 200}, 60)`);

    timelineLegend.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 30)
        .attr("y2", 0)
        .attr("stroke", "#ccc")
        .attr("stroke-width", 2);

    timelineLegend.append("text")
        .attr("x", 40)
        .attr("y", 4)
        .text("Current Timeline")
        .style("font-size", "12px");

    timelineLegend.append("line")
        .attr("x1", 0)
        .attr("y1", 20)
        .attr("x2", 30)
        .attr("y2", 20)
        .attr("stroke", "#ccc")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "5,5");

    timelineLegend.append("text")
        .attr("x", 40)
        .attr("y", 24)
        .text("Future Timeline")
        .style("font-size", "12px");
}
