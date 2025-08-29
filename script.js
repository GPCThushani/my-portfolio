// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Create random bubbles in sections
function createBubbles() {
  const sections = document.querySelectorAll('.bubble-section');

  sections.forEach(section => {
    const container = section.querySelector('.bubble-container');
    const numBubbles = Math.floor(Math.random() * 3) + 1; // 1-3 bubbles randomly

    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      // Random size 30-60px
      const size = Math.random() * 40 + 50;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Random position anywhere
      bubble.style.left = Math.random() * 90 + '%';
      bubble.style.top = Math.random() * 90 + '%';

      // Random animation duration and delay
      bubble.style.animationDuration = (Math.random() * 6 + 6) + 's';
      bubble.style.animationDelay = (Math.random() * 5) + 's';

      container.appendChild(bubble);
    }
  });
}

// Initialize bubbles
window.addEventListener('DOMContentLoaded', createBubbles);
