// Get all sections
const sections = document.querySelectorAll('section');

// Add event listener to each section
sections.forEach((section) => {
    section.addEventListener('mouseover', () => {
        // Add fade-in animation
        section.classList.add('fade-in');
    });
});

// Get all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each add to cart button
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Add item to cart (for demonstration purposes only)
        alert('Item added to cart!');
    });
});

// Get all navigation links
const navLinks = document.querySelectorAll('header nav a');

// Add event listener to each navigation link
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();

        // Get the section ID from the link
        const sectionId = link.getAttribute('href');

        // Scroll to the section
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});