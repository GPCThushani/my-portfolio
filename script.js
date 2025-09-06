// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if(window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// Particle system
const container = document.querySelector('.particles-container');
const particleCount = 60;

for(let i=0;i<particleCount;i++) createParticle();

function createParticle(){
    const p = document.createElement('div');
    p.className='particle';
    const size = Math.random()*3 +1;
    p.style.width = p.style.height = `${size}px`;
    p.style.left = `${Math.random()*100}%`;
    p.style.top = `${Math.random()*100}%`;
    p.style.opacity = Math.random()*0.3 +0.1;
    container.appendChild(p);
    animateParticle(p);
}

function animateParticle(p){
    const duration = Math.random()*15 +5;
    const moveX = (Math.random()-0.5)*50;
    const moveY = (Math.random()-0.5)*50;
    p.style.transition = `transform ${duration}s linear`;
    p.style.transform = `translate(${moveX}px,${moveY}px)`;
    setTimeout(()=>{ animateParticle(p); }, duration*1000);
}

// Mouse interaction particles
document.addEventListener('mousemove', e=>{
    const p = document.createElement('div');
    p.className='particle';
    const size = Math.random()*4 +2;
    p.style.width = p.style.height = `${size}px`;
    p.style.left = `${(e.clientX/window.innerWidth)*100}%`;
    p.style.top = `${(e.clientY/window.innerHeight)*100}%`;
    p.style.opacity = 0.6;
    container.appendChild(p);
    setTimeout(()=>{ p.remove(); }, 500);
});
// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.1 } // start animation when 10% of element is visible
);

reveals.forEach(section => {
  observer.observe(section);
});
// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

