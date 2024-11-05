// Select DOM elements for animations
const title = document.querySelector('.title');
const leaf1 = document.querySelector('.leaf1');
const leaf2 = document.querySelector('.leaf2');
const bush2 = document.querySelector('.bush2');
const mount1 = document.querySelector('.mount1');
const mount2 = document.querySelector('.mount2');

// Add event listener for scroll events
document.addEventListener('scroll', function() {
    let value = window.scrollY; // Get the current scroll position

    // Adjust title position based on scroll
    title.style.marginTop = value * 1.1 + 'px';

    // Move elements based on scroll
    leaf1.style.marginLeft = -value + 'px';
    leaf2.style.marginLeft = value + 'px';
    bush2.style.marginBottom = -value + 'px';
    mount1.style.marginBottom = -value * 1.1 + 'px';
    mount2.style.marginBottom = -value * 1.2 + 'px';
});















// Contact section...



function toggleContact(id, button) {
    var card = document.getElementById(id);

    // Toggle the visibility of the selected card
    if (card.classList.contains('active')) {
        card.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        card.setAttribute('aria-hidden', 'true');
    } else {
        card.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        card.setAttribute('aria-hidden', 'false');
    }

    // Close all other cards
    var allCards = document.querySelectorAll('.team-card');
    allCards.forEach(function(c) {
        if (c.id !== id) {
            c.classList.remove('active');
            c.setAttribute('aria-hidden', 'true');
        }
    });

    // Reset the other buttons' aria-expanded attribute
    var allButtons = document.querySelectorAll('.contact-btn');
    allButtons.forEach(function(b) {
        if (b !== button) {
            b.setAttribute('aria-expanded', 'false');
        }
    });
}
