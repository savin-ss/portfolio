// Premium Lightbox Modal for IEEE DISCOVER 2025 Certificate
function openIeeeModal() {
  const overlay = document.getElementById('ieeeModalOverlay');
  const content = document.getElementById('ieeeModalContent');
  if (overlay && content) {
    overlay.style.display = 'flex';
    // Allow display switch before setting opacity transition
    setTimeout(() => {
      overlay.style.opacity = '1';
      content.style.transform = 'scale(1)';
    }, 10);
  }
}

function closeIeeeModal() {
  const overlay = document.getElementById('ieeeModalOverlay');
  const content = document.getElementById('ieeeModalContent');
  if (overlay && content) {
    overlay.style.opacity = '0';
    content.style.transform = 'scale(0.9)';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300); // match transition timing exactly
  }
}

// Interactive Premium "Coming Soon" Toast Notification
function showComingSoonToast(projectName) {
  // Check if a toast already exists, remove it
  const existingToast = document.querySelector('.premium-toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast container
  const toast = document.createElement('div');
  toast.className = 'premium-toast glass';
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: rgba(10, 10, 30, 0.85);
    border: 1px solid rgba(6, 182, 212, 0.3);
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 1rem 1.5rem;
    border-radius: 12px;
    color: #fff;
    z-index: 100000;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-family: 'Space Grotesk', sans-serif;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `;

  // Content
  toast.innerHTML = `
    <i class="fas fa-lock" style="color: #06b6d4; font-size: 1.2rem;"></i>
    <div>
      <h5 style="margin: 0; font-size: 0.95rem; font-weight: 600;">${projectName}</h5>
      <p style="margin: 0; font-size: 0.8rem; color: #9ca3af;">Codebase coming soon to GitHub!</p>
    </div>
  `;

  document.body.appendChild(toast);

  // Trigger entrance animation
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 50);

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

// Close modal on escape key down and outer background clicks
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeIeeeModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('ieeeModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeIeeeModal();
      }
    });
  }
});

// Mobile Navigation Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change menu icon from bars to times (cross)
    const icon = menuToggle.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// Close mobile navigation on menu link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

// Navigation Bar Scroll Effect & Scrollspy
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

// Highly Optimized Scroll Performance (Throttle using RequestAnimationFrame)
let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      // Navbar background transition
      if (window.scrollY > 50) {
        navbar.classList.add('scroll');
      } else {
        navbar.classList.remove('scroll');
      }

      // Scrollspy
      let currentSectionId = '';
      const scrollPosition = window.pageYOffset + 150;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href').substring(1) === currentSectionId) {
            item.classList.add('active');
          }
        });
      }

      isScrolling = false;
    });
    isScrolling = true;
  }
});

// Highly Optimized ParticleJS Configuration for Maximum Scroll Performance
if (typeof particlesJS !== 'undefined') {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 30, // Reduced from 60 to prevent GPU/CPU scrolling lag
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#06b6d4"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.25,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 180,
        "color": "#06b6d4",
        "opacity": 0.12,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.2, // Smoother slower movement
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble" // Simpler interaction
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 150,
          "size": 4,
          "duration": 2,
          "opacity": 0.4,
          "speed": 3
        }
      }
    },
    "retina_detect": true
  });
}

// Stats counter animation logic utilizing high-performance IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.stat-counter');
  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 50; // increment rate
    const updateCount = () => {
      if (count < target) {
        count = Math.ceil(count + speed);
        if (count > target) count = target;
        counter.innerText = count + '+';
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target + '+';
      }
    };
    updateCount();
  };

  const observerOptions = {
    root: null,
    threshold: 0.15,
    once: true
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});