// Ensure the DOM is fully loaded before running the JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    // Create an intersection observer to detect when the resume-section comes into view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add 'in-view' class to both the section and inner elements
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Stop observing once it's in view
        }
      });
    }, {
      threshold: 0.5  // Trigger when 50% of the section is in the viewport
    });
  
    // Observe the resume-section by ID
    const resumeSection = document.getElementById('resume-section');
    if (resumeSection) {
      observer.observe(resumeSection);
    }
  });
  