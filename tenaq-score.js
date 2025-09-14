function animateScore() {
  const scoreEl = document.querySelector('#score-text');
  console.log('Score element found:', scoreEl);
  if (!scoreEl) {
    console.error('Score element not found!');
    return;
  }
  
  // Initial time-based score
  const hour = new Date().getHours();
  let score = Math.floor(50 + (Math.sin((hour - 6) * 0.26) * 30) + Math.random() * 10);
  scoreEl.textContent = score;
  
  // Optional: Animate on scroll into view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Fancy count-up animation
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        if (current >= score) {
          scoreEl.textContent = score;
          clearInterval(interval);
        } else {
          scoreEl.textContent = current;
        }
      }, 20);
      observer.disconnect();
    }
  });
  
  observer.observe(scoreEl);
}

document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure SVG is fully rendered
  setTimeout(animateScore, 100);
});

// Also run after window load as backup
window.addEventListener('load', animateScore);