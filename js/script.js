// Get the button
        let scrollTopBtn = document.getElementById("scrollTopBtn");

        // When the user scrolls down 300px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        scrollTopBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });

// for active button on scroll
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section, .container[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function removeActive() {
    navLinks.forEach(link => link.classList.remove("active"));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          removeActive();
          let id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.6 } // 60% of section visible to count as active
  );

  sections.forEach(section => {
    if (section.id) observer.observe(section);
  });
});


// hire me 1) download resume 2)linkedIn
function hireMe() {
  // Trigger resume download
  const link = document.createElement('a');
  link.href = 'image/resume.pdf'; // linkedin  
  link.download = 'Divyansh_Resume.pdf'; // your resume file
  link.click();

  // Redirect to LinkedIn after 1.5s
  setTimeout(() => {
    window.open('https://www.linkedin.com/in/divyansh-srivastava-34894b219/', '_blank');
  }, 1500);
}