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

    window.addEventListener('scroll', function() {
        // Calculate the scroll position
        let scrolled = window.pageYOffset;

        // Apply slight movement to each section's background
        document.querySelectorAll('.section').forEach(function(section) {
            let movementSpeed = section.getAttribute('data-speed'); // Customize speed
            let yPos = -(scrolled * movementSpeed); // Calculate new position
            section.style.backgroundPosition = '50% ' + yPos + 'px'; // Move background vertically
        });
    });
});
