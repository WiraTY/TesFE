// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    // Check if the navbar element exists
    if (navbar) {
        window.addEventListener('scroll', () => {
            // Add 'scrolled' class when scrolled down, remove it when at the top
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});
