// script.js

document.getElementById("customizeButton").addEventListener("click", function() {
    // Get user selections
    const gender = document.getElementById("gender").value;
    const brand = document.getElementById("brand").value;
    const color = document.getElementById("color").value;
    const model = document.getElementById("model").value;
    const size = document.getElementById("size").value;

    // Create a customized shoe description
    const customizedShoeDescription = `Customized ${gender} shoe from ${brand} in ${color}, model: ${model}, size ${size}.`;

    // Display the customized shoe description in the preview section
    document.getElementById("previewText").textContent = customizedShoeDescription;
});
