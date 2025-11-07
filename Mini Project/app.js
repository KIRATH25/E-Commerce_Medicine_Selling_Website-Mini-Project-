// Scroll Animation Observer
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections for scroll animations
const sections = document.querySelectorAll('.unique-section, .products-section, .mobile-section');
sections.forEach(section => {
  observer.observe(section);
});

// Button Click Handlers
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Add ripple effect
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Learn More button - scroll to unique section
const learnMoreBtn = document.querySelector('.btn-dark');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => {
    const uniqueSection = document.querySelector('.unique-section');
    uniqueSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Create with Magi button - scroll to products section
const createBtn = document.querySelector('.btn-light');
if (createBtn) {
  createBtn.addEventListener('click', () => {
    const productsSection = document.querySelector('.products-section');
    productsSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Service Cards - Add click interaction
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.service-arrow-btn')) {
      const serviceTitle = card.querySelector('.service-title').textContent;
      showNotification(`Viewing ${serviceTitle} details...`, 'info');
    }
  });
});

// Service Arrow Buttons
const serviceArrowBtns = document.querySelectorAll('.service-arrow-btn');
serviceArrowBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.service-card');
    const serviceTitle = card.querySelector('.service-title').textContent;
    showNotification(`Opening ${serviceTitle} service page...`, 'success');
  });
});

// Go to Shop Button
const shopButton = document.querySelector('.btn-shop-cta');
if (shopButton) {
  shopButton.addEventListener('click', (e) => {
    e.stopPropagation();
    showNotification('Redirecting to our shop...', 'success');
    
    // Add click animation
    shopButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
      shopButton.style.transform = '';
    }, 150);
    
    // Simulate navigation after brief delay
    setTimeout(() => {
      console.log('Navigate to shop page');
    }, 800);
  });
  
  // Add ripple effect to shop button
  shopButton.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    const rect = shopButton.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    ripple.style.backgroundColor = 'rgba(44, 44, 44, 0.3)';
    
    shopButton.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

// Navigation Arrows for Services
const navArrowLeft = document.querySelector('.nav-arrow-left');
const navArrowRight = document.querySelector('.nav-arrow-right');

if (navArrowLeft) {
  navArrowLeft.addEventListener('click', () => {
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.scrollBy({
      left: -400,
      behavior: 'smooth'
    });
    showNotification('Showing previous services...', 'info');
  });
}

if (navArrowRight) {
  navArrowRight.addEventListener('click', () => {
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.scrollBy({
      left: 400,
      behavior: 'smooth'
    });
    showNotification('Showing next services...', 'info');
  });
}

// Mobile section feature items interaction
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach(item => {
  item.addEventListener('click', () => {
    const featureText = item.querySelector('.feature-text').textContent;
    showNotification(`Feature: ${featureText}`, 'info');
  });
});

// Carousel functionality for mobile app screens
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const slideInterval = 3500; // 3.5 seconds per slide

function showSlide(index) {
  // Remove active class from all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Add active class to current slide
  if (slides[index]) {
    slides[index].classList.add('active');
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Start carousel auto-rotation
if (slides.length > 0) {
  // Initial display
  showSlide(0);
  
  // Auto-rotate every 3.5 seconds
  setInterval(nextSlide, slideInterval);
  
  console.log(`🎠 Carousel initialized with ${totalSlides} screens`);
  console.log('📱 Automatic rotation every 3.5 seconds');
}

// Smartphone mockup interaction
const smartphone = document.querySelector('.smartphone');
if (smartphone) {
  smartphone.addEventListener('click', () => {
    const activeSlide = document.querySelector('.carousel-slide.active');
    const screenNum = activeSlide ? activeSlide.getAttribute('data-screen') : '1';
    const screenNames = {
      '1': 'E-commerce Product',
      '2': 'Health Wellness',
      '3': 'Creative Design',
      '4': 'Dashboard Analytics',
      '5': 'Service Showcase'
    };
    showNotification(`Viewing: ${screenNames[screenNum]}`, 'info');
  });
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles for notification
  const style = document.createElement('style');
  if (!document.querySelector('#notification-styles')) {
    style.id = 'notification-styles';
    style.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        background-color: #333;
        color: white;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
      }
      
      .notification-success {
        background-color: #10b981;
      }
      
      .notification-error {
        background-color: #ef4444;
      }
      
      .notification-info {
        background-color: #3b82f6;
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
      
      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
      
      @media (max-width: 768px) {
        .notification {
          top: 10px;
          right: 10px;
          left: 10px;
          max-width: none;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Footer links interactivity
const footerLinks = document.querySelectorAll('.footer-list a');
footerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const linkText = link.textContent;
    showNotification(`Navigating to ${linkText}...`, 'info');
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Add parallax effect to hero section
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const hero = document.querySelector('.hero-section');
  
  if (hero && scrollY < window.innerHeight) {
    hero.style.transform = `translateY(${scrollY * 0.5}px)`;
    hero.style.opacity = 1 - (scrollY / window.innerHeight) * 0.7;
  }
  
  lastScrollY = scrollY;
});

// Service tags hover effect
const serviceTags = document.querySelectorAll('.service-tag');
serviceTags.forEach(tag => {
  tag.addEventListener('click', (e) => {
    e.stopPropagation();
    const tagText = tag.textContent;
    showNotification(`Filtering by: ${tagText}`, 'info');
  });
});

// Unique cards hover effect enhancement
const uniqueCards = document.querySelectorAll('.unique-card');
uniqueCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    if (this.classList.contains('unique-card--image')) {
      const content = this.querySelector('.unique-card__content');
      if (content) {
        content.style.transform = 'translateY(-4px)';
        content.style.transition = 'transform 0.3s ease';
      }
    }
  });
  
  card.addEventListener('mouseleave', function() {
    if (this.classList.contains('unique-card--image')) {
      const content = this.querySelector('.unique-card__content');
      if (content) {
        content.style.transform = 'translateY(0)';
      }
    }
  });
});

// Loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

console.log('🚀 Website fully loaded and interactive!');
console.log('All buttons are functional and responsive!');
console.log('📱 Mobile carousel with 5 animated screens is running!');
console.log('✨ Smooth fade transitions active!');