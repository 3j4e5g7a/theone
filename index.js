document.getElementById("aboutLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("resumeLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
});

