import {
    visualize,
} from './visualizer.js';

function updateNValue(value) {
    document.getElementById('n-value').textContent = value;
    visualize();
}

function updatePValue(value) {
    document.getElementById('p-value').textContent = value;
    visualize();
}

function updateXValue(value) {
    document.getElementById('x-value').textContent = value;
    visualize();
}

function updateKValue(value) {
    document.getElementById('k-value').textContent = value;
    visualize();
}

document.addEventListener('DOMContentLoaded', function() {
    visualize();
});

// Attach functions to the window object
window.updateNValue = updateNValue;
window.updatePValue = updatePValue;
window.updateXValue = updateXValue;
window.updateKValue = updateKValue;
window.visualize = visualize;
