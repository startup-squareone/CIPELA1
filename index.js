// script.js

document.getElementById('customizeButton').addEventListener('click', function() {
    document.getElementById('customizationTool').classList.toggle('hidden');
    document.getElementById('footMeasurementTool').classList.add('hidden');
});

document.getElementById('measureButton').addEventListener('click', function() {
    document.getElementById('footMeasurementTool').classList.toggle('hidden');
    document.getElementById('customizationTool').classList.add('hidden');
});
