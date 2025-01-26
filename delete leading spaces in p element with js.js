// Select an element with a specific ID or Class
var containerElement = document.querySelectorAll(".class");

// If the containerElement is found, proceed
if (containerElement) {
    // Select all <p> elements inside the container
    var paragraphs = containerElement.getElementsByTagName("p");
    
    // Process each <p> element
    for (var i = 0; i < paragraphs.length; i++) {
        // Remove leading whitespace from the text
        paragraphs[i].innerText = paragraphs[i].innerText.trimStart();
    }
}