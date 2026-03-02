/* ============================================================
   Calmino — Main JavaScript v3
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Scroll Reveal with Stagger --- */
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    /* --- Nav Scroll Effect --- */
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    /* --- Phone Carousel (Fade style) --- */
    const imgs = document.querySelectorAll('.carousel-img');
    const indicators = document.querySelectorAll('.indicator');

    if (imgs.length > 0) {
        let currentSlide = 0;

        function goToSlide(index) {
            imgs.forEach((img, i) => img.classList.toggle('active', i === index));
            indicators.forEach((ind, i) => ind.classList.toggle('active', i === index));
        }

        setInterval(() => {
            currentSlide = (currentSlide + 1) % imgs.length;
            goToSlide(currentSlide);
        }, 3500);

        indicators.forEach((ind, index) => {
            ind.addEventListener('click', () => {
                currentSlide = index;
                goToSlide(currentSlide);
            });
        });
    }

    /* --- Animated Counter for Stats --- */
    const statNumbers = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = 'true';
                    const target = entry.target.textContent.trim();
                    // Only animate pure numbers
                    if (/^\d+$/.test(target.replace('+', ''))) {
                        const num = parseInt(target.replace('+', ''));
                        const suffix = target.includes('+') ? '+' : '';
                        let current = 0;
                        const step = Math.max(1, Math.floor(num / 30));
                        const interval = setInterval(() => {
                            current += step;
                            if (current >= num) {
                                current = num;
                                clearInterval(interval);
                            }
                            entry.target.textContent = current + suffix;
                        }, 40);
                    }
                }
            });
        },
        { threshold: 0.5 }
    );
    statNumbers.forEach((el) => counterObserver.observe(el));

    /* --- Live Activity Timer Animation --- */
    const timer = document.querySelector('.la-timer');
    if (timer) {
        let seconds = 754; // Start at 12:34
        setInterval(() => {
            seconds++;
            const m = Math.floor(seconds / 60);
            const s = seconds % 60;
            timer.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        }, 1000);
    }

    /* --- Smooth Scroll for Anchor Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
