document.getElementById("aboutLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("resumeLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("portfolioLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
});

function handleScrollAnimation() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show'); // remove this line if you want the animation only once
    }
  });
}

// Run on scroll
window.addEventListener('scroll', handleScrollAnimation);
// Run on load
window.addEventListener('load', handleScrollAnimation);
