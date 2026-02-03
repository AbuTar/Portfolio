// scroll-nav.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]"); /*Selects the ids of all sections*/
  const navigation_links = document.querySelectorAll("nav a"); /* Selects all the navigation links*/

  const observer = new IntersectionObserver(entries => {
    /* The Intersections observer helps dynamically decide which section is currently in view
       Ths means if any given section takes up 'x'% of the screen, we'll change the active class*/
    
    entries.forEach(entry => {

      const id = entry.target.getAttribute("id");
      const navigation_links = document.querySelector(`nav a[href="#${id}"]`);

      if (entry.isIntersecting) {
        // Checks to see if the section is currently in view, if it is, it removes the active class from all elements
        // And assigns it to the section currently in view 

        navigation_links.forEach(link => link.classList.remove("active"));
        if (navigation_links) navigations_links.classList.add("active");
      }

    });
  }, {
    threshold: 0.6 // Change active class if section occupies 60%
  });

  sections.forEach(section => observer.observe(section)); // This is need to actually 
});
