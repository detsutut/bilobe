document.addEventListener('DOMContentLoaded', function() {
    const wordContainers = document.querySelectorAll('.word-container');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const exploreBtn = document.getElementById('hero-btn');

    function animateWords(index = 0) {
        if (index < wordContainers.length) {
            wordContainers[index].classList.add('active');
            setTimeout(() => animateWords(index + 1), 450);
        } else {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
            exploreBtn.style.opacity = '1';
            exploreBtn.style.transform = 'translateY(0)';
        }
    }

    setTimeout(animateWords, 500);

    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    hiddenElements.forEach(el => observer.observe(el));
});

window.addEventListener('scroll', function() {
    // Get the amount of scrolling
    let scrolled = window.pageYOffset;

    // Loop over all sections to adjust background positions
    document.querySelectorAll('.section').forEach(function(section) {
        let speed = section.getAttribute('data-speed'); // Customize speed per section
        if (speed) {
            let yPos = -(scrolled * speed); // Calculate new background position
            section.style.backgroundPosition = '50% ' + yPos + 'px'; // Move background vertically
        }
    });
});
