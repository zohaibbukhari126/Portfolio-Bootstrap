
document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar toggler element
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Add a click event listener to it
    navbarToggler.addEventListener('click', function() {
        // Toggle the navbar
        const navbarCollapse = document.querySelector('#navbarResponsive');
        bootstrap.Navbar.toggleNavbar(navbarCollapse);
    });

    // Add click event listeners to navbar links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
        item.addEventListener('click', () => {
            // Close the navbar on mobile when a link is clicked
            const navbarCollapse = document.querySelector('#navbarResponsive');
            bootstrap.Navbar.toggleNavbar(navbarCollapse);
        });
    });
});
