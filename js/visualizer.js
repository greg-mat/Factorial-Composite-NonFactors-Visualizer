// Import necessary utility functions
import { getPrimes, generateMultiples, isComposite, getCompositeNonFactors } from './utils.js';

const DEBUG = false;

export {
    visualize,
    createTable,
    highlightBoundingBox,
    displayMissingNonFactorsMessage,
    highlightCompositeNonFactors
};

function visualize() {
    const x = parseInt(document.getElementById('x-slider').value);
    const k = parseInt(document.getElementById('k-slider').value);
    const n = parseInt(document.getElementById('n-slider').value);
    const p = parseInt(document.getElementById('p-slider').value);

    const primes = getPrimes(x, n);
    const multiples = generateMultiples(primes, p);
    const compositeNonFactors = getCompositeNonFactors(x, k);
    const presentNonFactors = compositeNonFactors.filter(num => multiples.includes(num));
    const missingNonFactors = compositeNonFactors.filter(num => !multiples.includes(num));
    const allPresent = presentNonFactors.length === k;

    const visualizer = document.getElementById('visualizer');
    visualizer.innerHTML = '';

    const tableContainer = createTable(primes, p);
    visualizer.appendChild(tableContainer);

    if (allPresent) {
        highlightBoundingBox(tableContainer, compositeNonFactors);
    } else {
        displayMissingNonFactorsMessage(visualizer, presentNonFactors, missingNonFactors, k, x);
    }

    highlightCompositeNonFactors(tableContainer, compositeNonFactors);

    // Debug output
    if (DEBUG) {
        console.log('x:', x);
        console.log('k:', k);
        console.log('Composite non-factors:', compositeNonFactors);
        console.log('Multiples in table:', multiples);
        console.log('Present non-factors:', presentNonFactors);
        console.log('Missing non-factors:', missingNonFactors);
    }
}

function createTable(primes, p) {
    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-container';

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.textContent = 'Prime / m1';
    headerRow.appendChild(headerCell);
    for (let i = 1; i <= p; i++) {
        const headerCell = document.createElement('th');
        headerCell.textContent = `m${i+1}`;
        headerRow.appendChild(headerCell);
    }
    tbody.appendChild(headerRow);

    // Create rows for each prime and its multiples
    for (const prime of primes) {
        const row = document.createElement('tr');

        const primeCell = document.createElement('td');
        primeCell.textContent = prime;
        row.appendChild(primeCell);

        for (let i = 2; i <= p + 1; i++) {
            const multiple = i * prime;
            const multipleCell = document.createElement('td');
            multipleCell.textContent = multiple;
            row.appendChild(multipleCell);
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    return tableContainer;
}

function highlightBoundingBox(tableContainer, compositeNonFactors) {
    const boundingBoxContainer = document.createElement('div');
    boundingBoxContainer.className = 'bounding-box-container';

    const cells = Array.from(tableContainer.getElementsByTagName('td'));
    const boundingCells = cells.filter(cell => compositeNonFactors.includes(parseInt(cell.textContent)));

    boundingCells.forEach(cell => {
        cell.classList.add('target-non-factors');
    });

    const minLeft = Math.min(...boundingCells.map(cell => cell.offsetLeft));
    const minTop = Math.min(...boundingCells.map(cell => cell.offsetTop));
    const maxRight = Math.max(...boundingCells.map(cell => cell.offsetLeft + cell.offsetWidth));
    const maxBottom = Math.max(...boundingCells.map(cell => cell.offsetTop + cell.offsetHeight));

    boundingBoxContainer.style.left = `${minLeft - 0}px`;
    boundingBoxContainer.style.top = `${minTop - 0}px`;
    boundingBoxContainer.style.width = `${maxRight - minLeft - 2}px`;
    boundingBoxContainer.style.height = `${maxBottom - minTop - 2}px`;

    tableContainer.appendChild(boundingBoxContainer);
}

function displayMissingNonFactorsMessage(visualizer, presentNonFactors, missingNonFactors, k, x) {
    const message = document.createElement('p');
    message.textContent = `Only ${presentNonFactors.length} out of ${k} smallest composite non-factors of ${x}! are visible in the current table.`;
    visualizer.appendChild(message);

    const missingMessage = document.createElement('p');
    missingMessage.textContent = `Missing non-factors: ${missingNonFactors.join(', ')}`;
    visualizer.appendChild(missingMessage);
}

function highlightCompositeNonFactors(tableContainer, compositeNonFactors) {
    const cells = Array.from(tableContainer.getElementsByTagName('td'));
    cells.forEach(cell => {
        const cellValue = parseInt(cell.textContent);
        if (compositeNonFactors.includes(cellValue)) {
            cell.classList.add('target-non-factors');
        } else if (isComposite(cellValue)) {
            cell.classList.add('other-composites');
        }
    });
}
