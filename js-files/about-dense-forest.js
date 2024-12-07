
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








document.querySelectorAll('.plant-card img').forEach((img) => {
    const images = img.dataset.images.split(','); // Retrieve the list of images
    let index = 0;
    let interval;

    img.addEventListener('mouseenter', () => {
        interval = setInterval(() => {
            index = (index + 1) % images.length; // Cycle through the images
            img.classList.add('hovered'); // Add fade-out effect
            setTimeout(() => {
                img.src = images[index]; // Change the image source
                img.classList.remove('hovered'); // Fade-in new image
            }, 300); // Wait for fade-out before swapping image
        }, 1000); // Change image every 1 second (adjust as needed)
    });

    img.addEventListener('mouseleave', () => {
        clearInterval(interval); // Stop changing images when hover ends
        img.classList.remove('hovered'); // Ensure the image is visible again
        img.style.opacity = 1; // Reset opacity when leaving hover
    });
});
