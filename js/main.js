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
            if (anchor.classList.contains('app-store-badge') || anchor.classList.contains('nav-store-badge') || anchor.closest('.drawer-badges')) return;
            e.preventDefault();
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* --- Store Badge "Coming Soon" Popup --- */
    const comingSoonPopup = document.createElement('div');
    comingSoonPopup.id = 'coming-soon-popup';
    comingSoonPopup.innerHTML = `<div class="cs-overlay"></div><div class="cs-box"><span class="cs-text">בקרוב!</span></div>`;
    document.body.appendChild(comingSoonPopup);

    function showComingSoon(e) {
        e.preventDefault();
        comingSoonPopup.classList.add('open');
    }
    function hideComingSoon() {
        comingSoonPopup.classList.remove('open');
    }

    document.querySelectorAll('.app-store-badge, .nav-store-badge, .drawer-badges a').forEach(btn => {
        btn.addEventListener('click', showComingSoon);
    });
    comingSoonPopup.querySelector('.cs-overlay').addEventListener('click', hideComingSoon);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideComingSoon(); });

    /* --- Mobile Hamburger Drawer --- */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const drawerClose = document.getElementById('drawerClose');

    function openDrawer() {
        hamburgerBtn.classList.add('open');
        mobileDrawer.classList.add('open');
        mobileOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        hamburgerBtn.classList.remove('open');
        mobileDrawer.classList.remove('open');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openDrawer);
        drawerClose.addEventListener('click', closeDrawer);
        mobileOverlay.addEventListener('click', closeDrawer);
        document.querySelectorAll('.drawer-link').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }

});
