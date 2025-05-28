# D3.js Roadmap Chart

This project presents a roadmap chart visualization implemented with D3.js.

## About the Project

The roadmap chart is a hierarchical visualization that shows relationships between categories and subcategories in a nested data structure. It is similar to a pie chart, but with multiple levels that allow visualizing data hierarchies.

## Features

- Interactive visualization of hierarchical data
- Tooltips when hovering over segments
- Distinct colors for different categories
- Labels for sufficiently large segments

## How to Use

1. Clone this repository
2. Open the `index.html` file in a modern web browser
3. Interact with the charts by hovering over the different segments

## Project Structure

The project is organized in a modular way to facilitate maintenance and reuse:

- `index.html`: Contains the basic HTML structure and references to external files
- `styles.css`: Contains all CSS styles for the charts
- `data.js`: Contains the data sets for the charts
- `roadmap.js`: Contains the function to create roadmap charts

## How to Add New Charts

To add a new roadmap chart to the page:

1. Add a new data set in `data.js` or use an existing one
2. Add a new container in the HTML: `<div id="myNewChart"></div>`
3. Call the `createRoadmapChart` function with the appropriate parameters:
   ```javascript
   createRoadmapChart(myDataSet, "myNewChart");
   ```

## Data Structure

The chart uses a hierarchical data structure in JSON format:

```json
{
    "name": "Root",
    "children": [
        {
            "name": "Category A",
            "children": [
                { "name": "Subcategory A1", "value": 20 },
                "..."
            ]
        },
        "..."
    ]
}
```

## Customization

To use your own data, modify or add new data sets in the `data.js` file. Each node must have:

- A name (`name`)
- A value (`value`) for leaf nodes
- Or an array of children (`children`) for internal nodes

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [D3.js](https://d3js.org/) v7

## License

This project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
