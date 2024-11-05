
// Function to show the feature details for Canopy Layer
function showCanopyFeature() {
    document.getElementById("featureTitle").textContent = "Canopy Layer - Dense Forest";
    document.getElementById("featureContent").textContent = "The Canopy layer is the highest part of the forest, housing tall trees and various bird species. This layer absorbs most sunlight and is a haven for epiphytes, such as orchids and bromeliads.";
    document.getElementById("featureDetails").style.display = "block";
}

// Function to show the feature details for Understory Layer
function showUnderstoryFeature() {
    document.getElementById("featureTitle").textContent = "Understory Layer - Dense Forest";
    document.getElementById("featureContent").textContent = "The Understory layer consists of smaller trees and shrubs, creating a humid environment. It provides shelter to animals like jaguars, leopardsss, and smaller mammal";
    document.getElementById("featureDetails").style.display = "block";
}

// Function to show the feature details for Forest Floor
function showForestFloorFeature() {
    document.getElementById("featureTitle").textContent = "Forest Floor - Dense Forest";
    document.getElementById("featureContent").textContent = "The Forest Floor is the lowest part of the forest, rich in decomposing plant matter. It is critical for nutrient recycling and is home to fungi, insects, and the roots of towering trees.";
    document.getElementById("featureDetails").style.display = "block";
}

// Function to hide the feature details when not hovering
function hideFeature() {
    document.getElementById("featureDetails").style.display = "none";
}
// Function to show the feature details for Canopy Layer
function showCanopyFeature() {
    document.getElementById("featureTitle").textContent = "Canopy Layer - Dense Forest";
    document.getElementById("featureContent").textContent = "The Canopy layer is the highest part of the forest, housing tall trees and various bird species. This layer absorbs most sunlight and is a haven for epiphytes, such as orchids and bromeliads.";
    document.getElementById("featureDetails").classList.add("show"); // Show the feature section with a smooth transition
}

// Function to show the feature details for Understory Layer
function showUnderstoryFeature() {
    document.getElementById("featureTitle").textContent = "Understory Layer - Dense Forest";
    document.getElementById("featureContent").textContent = "The Understory layer consists of smaller trees and shrubs, creating a humid environment. It provides shelter to animals like jaguars, leopards, and smaller mammals.";
    document.getElementById("featureDetails").classList.add("show"); // Show the feature section with a smooth transition
}

// Function to show the feature details for Forest Floor
function showForestFloorFeature() {
    document.getElementById("featureTitle").textContent = "Forest Floor - Dense Forest";
    document.getElementById("featureContent").textContent = "The Forest Floor is the lowest part of the forest, rich in decomposing plant matter. It is critical for nutrient recycling and is home to fungi, insects, and the roots of towering trees If implementing a leaderboard, use a simple back-end service (such as Firebase) to track user scores and display them in real-time..";
    document.getElementById("featureDetails").classList.add("show"); // Show the feature section with a smooth transition
}







// Create an Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when at least 10% of the item is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const quizItem = entry.target;

            // Add animation class when the item comes into view
            quizItem.classList.add('visible');

            // Stop observing the item
            observer.unobserve(quizItem);
        }
    });
}, options);

// Select all quiz items and observe them
const quizItems = document.querySelectorAll('.quiz-item');
quizItems.forEach(item => {
    observer.observe(item);
});



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.about-text, .about-vision');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the section is in the viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                section.classList.add('show'); // Add the class to show the element
            }
        });
    }

    // Initial check on load
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});






// About plants forest layer section start here

function showFeature(title, content) {
    // Update the feature details with the title and content
    document.getElementById("featureTitle").innerText = title;
    document.getElementById("featureContent").innerText = content;

    // Show the feature details section
    const featureDetails = document.getElementById("featureDetails");
    featureDetails.classList.add("show"); // Add 'show' class to make it visible
}

function hideFeature() {
    // Hide the feature details section
    const featureDetails = document.getElementById("featureDetails");
    featureDetails.classList.remove("show"); // Remove 'show' class to hide it
}


// About plants forest layer ends  here
