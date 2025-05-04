
import { useEffect } from 'react';

const PortfolioScript = () => {
  useEffect(() => {
    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Show/hide project cards based on filter
        projectCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'block';
          } else {
            if (card.getAttribute('data-category') === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });

    // Skills animation
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('style')?.split(':')[1];
          if (width) {
            entry.target.style.width = width;
          }
        }
      });
    }, { threshold: 0.5 });
    
    skillProgressBars.forEach(bar => {
      observer.observe(bar);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real portfolio, you would implement form submission logic here
        // For this example, we'll just log the form submission
        console.log('Form submitted!');
        
        // Reset the form
        contactForm.reset();
        
        // Show a success message (in a real app, you would use a toast or modal)
        alert('Message sent successfully!');
      });
    }

    // Cleanup event listeners
    return () => {
      filterButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      
      if (contactForm) {
        contactForm.removeEventListener('submit', () => {});
      }
      
      skillProgressBars.forEach(bar => {
        observer.unobserve(bar);
      });
    };
  }, []);

  return null;
};

export default PortfolioScript;
