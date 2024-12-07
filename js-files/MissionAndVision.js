// Open modal on item click
document.querySelectorAll('.vision-item').forEach(item => {
    item.addEventListener('click', () => {
        // Fetch and populate basic details
        const title = item.dataset.title;
        const description = item.dataset.description;
        const imageSrc = item.dataset.image;

        // Fetch and populate additional details
        const keyPoints = item.dataset.keyPoints ? item.dataset.keyPoints.split(', ') : [];
        const additionalInfo = item.dataset.additionalInfo || 'No additional information available.';

        // Populate modal content
        document.querySelector('.modall-left h3').textContent = title;
        document.querySelector('.modall-left p:first-of-type').textContent = description;

        const keyPointsList = document.querySelector('.modall-left ul');
        keyPointsList.innerHTML = ''; // Clear existing content
        keyPoints.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            keyPointsList.appendChild(li);
        });

        document.querySelector('.modall-left p:last-of-type').textContent = additionalInfo;
        document.querySelector('.modall-right img').src = imageSrc;

        // Show the modal
        document.querySelector('.modall').style.display = 'flex';
    });
});

// Close modal function
function closeModal() {
    document.querySelector('.modall').style.display = 'none';
}

// Close modal when clicking outside modal content
window.addEventListener('click', function (event) {
    const modal = document.querySelector('.modall');
    if (event.target === modal) {
        closeModal();
    }
});

// Attach close function to the close button
document.querySelector('.modall-close').addEventListener('click', closeModal);
