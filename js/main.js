// ================================
// LITTLE EAR, BIG HEART - Main JS
// ================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // ================================
    // MOBILE MENU TOGGLE
    // ================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger to X
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // ================================
    // SMOOTH SCROLLING
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default for just '#'
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================================
    // NAVBAR SCROLL EFFECT
    // ================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(46, 92, 138, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(46, 92, 138, 0.08)';
        }

        lastScroll = currentScroll;
    });

    // ================================
    // EMAIL NOTIFICATION FORM
    // ================================
    const notifyForm = document.getElementById('notifyForm');
    const formSuccess = document.getElementById('formSuccess');

    if (notifyForm) {
        notifyForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = document.getElementById('email');
            const email = emailInput.value;

            // Basic email validation
            if (!isValidEmail(email)) {
                showFormError('Please enter a valid email address');
                return;
            }

            // Here you would typically send the email to your backend
            // For now, we'll just show the success message

            // Simulate API call
            submitEmail(email)
                .then(() => {
                    // Hide form, show success
                    notifyForm.style.display = 'none';
                    formSuccess.classList.add('show');

                    // Store in localStorage to remember
                    localStorage.setItem('emailSubmitted', 'true');
                    localStorage.setItem('subscriberEmail', email);
                })
                .catch((error) => {
                    showFormError('Something went wrong. Please try again.');
                });
        });
    }

    // Check if user already submitted email
    if (localStorage.getItem('emailSubmitted') === 'true') {
        notifyForm.style.display = 'none';
        formSuccess.classList.add('show');
    }

    // ================================
    // FORM HELPER FUNCTIONS
    // ================================
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function submitEmail(email) {
        // Simulate API call - replace with actual endpoint
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success
                console.log('Email submitted:', email);
                resolve({ success: true });

                // For actual implementation, use:
                // fetch('YOUR_API_ENDPOINT', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ email: email })
                // })
                // .then(response => response.json())
                // .then(data => resolve(data))
                // .catch(error => reject(error));
            }, 1000);
        });
    }

    function showFormError(message) {
        const emailInput = document.getElementById('email');
        emailInput.style.border = '2px solid #ED8936';

        // Create or update error message
        let errorMsg = document.querySelector('.form-error');
        if (!errorMsg) {
            errorMsg = document.createElement('p');
            errorMsg.className = 'form-error';
            errorMsg.style.color = '#ED8936';
            errorMsg.style.marginTop = '0.5rem';
            errorMsg.style.fontSize = '0.9rem';
            notifyForm.appendChild(errorMsg);
        }
        errorMsg.textContent = message;

        // Remove error styling on input
        emailInput.addEventListener('input', function() {
            emailInput.style.border = 'none';
            if (errorMsg) errorMsg.remove();
        }, { once: true });
    }

    // ================================
    // SCROLL ANIMATIONS
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.mission-card, .act, .resource-card, .edition, .info-card'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // ================================
    // PARALLAX EFFECT ON HERO
    // ================================
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;

            if (scrolled < window.innerHeight) {
                heroVisual.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // ================================
    // FLOATING HEARTS ANIMATION
    // ================================
    const floatingHearts = document.querySelectorAll('.floating-heart');

    floatingHearts.forEach((heart, index) => {
        // Random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;

            heart.style.transition = 'transform 3s ease-in-out';
            heart.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + (index * 1000));
    });

    // ================================
    // RESOURCE LINKS - Track Clicks
    // ================================
    const resourceLinks = document.querySelectorAll('.resource-link');

    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceType = this.parentElement.querySelector('h3').textContent;
            console.log('Resource clicked:', resourceType);

            // Here you would typically track this with analytics
            // For now, show alert that resources are coming soon
            alert('Resources coming soon! We\'re working on compiling the best Microtia resources for you.');
        });
    });

    // ================================
    // KEYBOARD ACCESSIBILITY
    // ================================
    // Ensure proper focus management
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // ================================
    // CONSOLE MESSAGE
    // ================================
    console.log('%c📚 Little Ear, Big Heart', 'font-size: 20px; font-weight: bold; color: #4A90E2;');
    console.log('%cA story about being different, being brave, and being perfectly you.', 'font-size: 14px; color: #7B68EE;');
    console.log('%c❤️ Different is awesome.', 'font-size: 12px; color: #50C9C3;');

});

// ================================
// UTILITY FUNCTIONS
// ================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
