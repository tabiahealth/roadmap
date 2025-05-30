// Function to generate the table content from the data
function generateFunctionalitiesTable() {
    const tableBody = document.getElementById('functionalities-table-body');

    // Extract all deliverables
    const deliverables = tabiaFunctionalitiesData.map(item => item.deliverable);

    // Extract all functionalities from the tabiaFunctionalities object
    const allFunctionalities = Object.values(tabiaFunctionalities);

    // Create the header row with deliverables as columns
    const headerRow = document.createElement('tr');

    // Add an empty cell for the top-left corner
    const cornerCell = document.createElement('th');
    cornerCell.textContent = 'Features / Deliverables';
    headerRow.appendChild(cornerCell);

    // Add a column for each deliverable
    deliverables.forEach(deliverable => {
        const th = document.createElement('th');
        th.textContent = deliverable;
        headerRow.appendChild(th);
    });

    // Replace the existing header with our new header
    const thead = document.querySelector('#featuremap table thead');
    thead.innerHTML = '';
    thead.appendChild(headerRow);

    // Clear the table body
    tableBody.innerHTML = '';

    // Remove any existing legend
    const existingLegend = document.querySelector('.checkmark-legend');
    if (existingLegend) {
        existingLegend.remove();
    }

    // Create a row for each functionality
    allFunctionalities.forEach(functionality => {
        const row = document.createElement('tr');

        // Add functionality name cell
        const nameCell = document.createElement('td');
        nameCell.textContent = functionality.name;
        nameCell.style.fontWeight = 'bold';
        row.appendChild(nameCell);

        // Add a cell for each deliverable
        deliverables.forEach(deliverable => {
            const cell = document.createElement('td');
            cell.style.textAlign = 'center';

            // Find the deliverable object
            const deliverableObj = tabiaFunctionalitiesData.find(item => item.deliverable === deliverable);

            // Find the functionality configuration for this deliverable
            const functionalityConfig = deliverableObj.functionalities.find(f => f.id === functionality.id);

            // Check if this functionality exists in this deliverable
            if (functionalityConfig) {
                const container = document.createElement('div');
                container.classList.add('checkmark-container');

                // Add checkmarks based on the configuration
                if (functionalityConfig.checkmarkType === "gray" || functionalityConfig.checkmarkType === "both") {
                    const grayCheckmark = document.createElement('span');
                    grayCheckmark.innerHTML = '✓';
                    grayCheckmark.classList.add('checkmark-gray');
                    container.appendChild(grayCheckmark);
                }

                if (functionalityConfig.checkmarkType === "blue" || functionalityConfig.checkmarkType === "both") {
                    const blueCheckmark = document.createElement('span');
                    blueCheckmark.innerHTML = '✓';
                    blueCheckmark.classList.add('checkmark-blue');
                    container.appendChild(blueCheckmark);
                }

                cell.appendChild(container);
            }

            row.appendChild(cell);
        });

        tableBody.appendChild(row);

        // If the functionality has sub-items, create rows for them
        if (functionality.subItems && functionality.subItems.length > 0) {
            functionality.subItems.forEach(subItem => {
                const subRow = document.createElement('tr');
                subRow.classList.add('sub-item');

                // Add sub-item name cell with indentation
                const subNameCell = document.createElement('td');
                subNameCell.textContent = subItem;
                subRow.appendChild(subNameCell);

                // Add a cell for each deliverable
                deliverables.forEach(deliverable => {
                    const cell = document.createElement('td');
                    cell.style.textAlign = 'center';

                    // Find the deliverable object
                    const deliverableObj = tabiaFunctionalitiesData.find(item => item.deliverable === deliverable);

                    // Find the functionality configuration for this deliverable
                    const functionalityConfig = deliverableObj.functionalities.find(f => f.id === functionality.id);

                    // Check if the parent functionality exists in this deliverable
                    if (functionalityConfig) {
                        const container = document.createElement('div');
                        container.classList.add('checkmark-container');

                        // Add checkmarks based on the configuration
                        if (functionalityConfig.checkmarkType === "gray" || functionalityConfig.checkmarkType === "both") {
                            const grayCheckmark = document.createElement('span');
                            grayCheckmark.innerHTML = '✓';
                            grayCheckmark.classList.add('checkmark-gray');
                            container.appendChild(grayCheckmark);
                        }

                        if (functionalityConfig.checkmarkType === "blue" || functionalityConfig.checkmarkType === "both") {
                            const blueCheckmark = document.createElement('span');
                            blueCheckmark.innerHTML = '✓';
                            blueCheckmark.classList.add('checkmark-blue');
                            container.appendChild(blueCheckmark);
                        }

                        cell.appendChild(container);
                    }

                    subRow.appendChild(cell);
                });

                tableBody.appendChild(subRow);
            });
        }
    });

    // Create the legend
    createCheckmarkLegend();
}

// Function to create the legend for checkmarks
function createCheckmarkLegend() {
    // Create the legend container
    const legendContainer = document.createElement('div');
    legendContainer.classList.add('checkmark-legend');

    // Create the legend title
    const legendTitle = document.createElement('h3');
    legendTitle.textContent = 'Legend:';
    legendContainer.appendChild(legendTitle);

    // Create the legend items container
    const legendItems = document.createElement('div');
    legendItems.classList.add('legend-items');

    // Create the gray checkmark legend item
    const grayLegendItem = document.createElement('div');
    grayLegendItem.classList.add('legend-item');

    const grayCheckmark = document.createElement('span');
    grayCheckmark.innerHTML = '✓';
    grayCheckmark.classList.add('checkmark-gray');

    const grayLabel = document.createElement('span');
    grayLabel.textContent = 'At least one semi-automated solution deployed';

    grayLegendItem.appendChild(grayCheckmark);
    grayLegendItem.appendChild(grayLabel);
    legendItems.appendChild(grayLegendItem);

    // Create the blue checkmark legend item
    const blueLegendItem = document.createElement('div');
    blueLegendItem.classList.add('legend-item');

    const blueCheckmark = document.createElement('span');
    blueCheckmark.innerHTML = '✓';
    blueCheckmark.classList.add('checkmark-blue');

    const blueLabel = document.createElement('span');
    blueLabel.textContent = 'At least one automated solution deployed';

    blueLegendItem.appendChild(blueCheckmark);
    blueLegendItem.appendChild(blueLabel);
    legendItems.appendChild(blueLegendItem);

    // Add the legend items to the container
    legendContainer.appendChild(legendItems);

    // Add the legend to the page
    const featuremapContainer = document.getElementById('featuremap');
    featuremapContainer.appendChild(legendContainer);
}

// Initialize the table when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateFunctionalitiesTable);
