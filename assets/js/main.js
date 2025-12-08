// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                // Tutup mobile menu jika terbuka
                document.getElementById('mobile-menu').classList.add('hidden');
            }
        }
    });
});

// Particle background effect
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle array
    const particles = [];
    const particleCount = 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.2})`
        });
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;

            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Character filter functionality
    const filterButtons = document.querySelectorAll('.filter-toggle');
    const characterCards = document.querySelectorAll('.character-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-gradient-to-r', 'from-yellow-400', 'to-yellow-500', 'text-black'));
            filterButtons.forEach(btn => {
                if (!btn.classList.contains('active')) {
                    btn.classList.add('glass-effect');
                }
            });

            // Add active class to clicked button
            button.classList.add('active', 'bg-gradient-to-r', 'from-yellow-400', 'to-yellow-500', 'text-black');
            button.classList.remove('glass-effect');

            const element = button.getAttribute('data-element');

            // Show/hide character cards based on filter
            characterCards.forEach(card => {
                if (element === 'all' || card.classList.contains(`character-element-${element}`)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, 50);
                } else {
                    card.classList.remove('fade-in');
                    card.style.display = 'none';
                }
            });
        });
    });

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all character cards
    characterCards.forEach(card => {
        observer.observe(card);
    });


    // Intersection Observer untuk animasi fade-in
    const observerFadeInUpOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerFadeInUp = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observerFadeInUp.unobserve(entry.target);
            }
        });
    }, observerFadeInUpOptions);

    // Observe semua elemen dengan class fade-in-up
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observerFadeInUp.observe(el);
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});