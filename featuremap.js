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

            // Check if this functionality exists in this deliverable
            const exists = deliverableObj.functionalityIds.includes(functionality.id);

            // Add a checkmark if the functionality exists in this deliverable
            if (exists) {
                cell.innerHTML = '✓';
                cell.classList.add('checkmark');
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

                    // Check if the parent functionality exists in this deliverable
                    const exists = deliverableObj.functionalityIds.includes(functionality.id);

                    // Add a checkmark if the parent functionality exists in this deliverable
                    if (exists) {
                        cell.innerHTML = '✓';
                        cell.classList.add('checkmark');
                    }

                    subRow.appendChild(cell);
                });

                tableBody.appendChild(subRow);
            });
        }
    });
}

// Initialize the table when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateFunctionalitiesTable);
