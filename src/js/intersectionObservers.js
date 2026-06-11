const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    console.log(entry.target, entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.heading-mask-text .text-wrapper .h1, .about-text .p, .technologies span, .work-section .heading .h1')
  .forEach(el => observer.observe(el));