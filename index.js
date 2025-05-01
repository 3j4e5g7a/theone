const sectionIds = ['section1', 'section2', 'section3', 'section4'];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.1
  });

  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
