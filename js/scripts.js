document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

    // Get the navbar toggler element
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Add a click event listener to it
    navbarToggler.addEventListener('click', function() {
        // Check if the navbar is already expanded
        const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

        // Set aria-expanded attribute to the opposite value
        navbarToggler.setAttribute('aria-expanded', !isExpanded);
    });

    // Add click event listeners to navbar links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
        item.addEventListener('click', () => {
            // Close the navbar on mobile when a link is clicked
            navbarToggler.click();
        });
    });
<<<<<<< HEAD
    var typed = new Typed('.niches', {
        strings: ["Software Engineer", "Digital Marketer"],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true,
        backDelay: 2000
      });
      
      
    
  

});

=======
});
>>>>>>> parent of 176938b (Toggle Button Problem solved in mobile view)
