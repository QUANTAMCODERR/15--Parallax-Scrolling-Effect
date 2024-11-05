// plant scroll section of dense forest geca

// Scroll-triggered animation for plants-section
const plantsSection = document.querySelector('.plants-section');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight * 0.8; // Trigger earlier for gradual appearance
    const sectionTop = plantsSection.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
        plantsSection.classList.add('in-view');
    } else {
        plantsSection.classList.remove('in-view');
    }
});






// Scroll-triggered animation for about-plants section
const aboutSection = document.querySelector('.about-plants-section');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight * 0.8; // Trigger earlier for gradual appearance
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
        aboutSection.classList.add('in-view');
    } else {
        aboutSection.classList.remove('in-view');
    }
});


//facts section ....
const uniquePlantFacts = document.querySelectorAll('.unique-plant-fact');

function animateOnScroll() {
    const triggerPoint = window.innerHeight * 0.8; // Trigger when the element is 80% visible

    uniquePlantFacts.forEach((fact, index) => {
        const factTop = fact.getBoundingClientRect().top;

        // Debugging log to track positions
        console.log(`Fact ${index + 1} top: ${factTop}, triggerPoint: ${triggerPoint}`);

        if (factTop < triggerPoint) {
            fact.style.transitionDelay = `${index * 0.3}s`;
            fact.classList.add('in-view'); // Add class to trigger CSS transition
        } else {
            fact.classList.remove('in-view'); // Remove class if the element goes out of view
        }
    });
}



//benifits about plants...

// Attach event listeners
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Ensure initial check when the page loads
animateOnScroll();

// tree benifits

const uniqueTreeBenefits = document.querySelectorAll('.unique-tree-benefit');

function animateBenefitsOnScroll() {
    const triggerPoint = window.innerHeight * 0.8; // Trigger when the element is 80% visible

    uniqueTreeBenefits.forEach((benefit, index) => {
        const benefitTop = benefit.getBoundingClientRect().top;

        // Debugging log to track positions
        console.log(`Benefit ${index + 1} top: ${benefitTop}, triggerPoint: ${triggerPoint}`);

        if (benefitTop < triggerPoint) {
            benefit.style.transitionDelay = `${index * 0.3}s`;
            benefit.classList.add('in-view'); // Add class to trigger CSS transition
        } else {
            benefit.classList.remove('in-view'); // Remove class if the element goes out of view
        }
    });
}

// Attach event listeners
window.addEventListener('scroll', animateBenefitsOnScroll);
window.addEventListener('load', animateBenefitsOnScroll);

// Ensure initial check when the page loads
animateBenefitsOnScroll();

