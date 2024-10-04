let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;
let ticking = false; // Prevent multiple scroll events from firing
// Check if the screen is desktop (min-width: 768px)
let isDesktop = window.innerWidth >= 768;


// Function to dynamically set background size
function setDynamicBackgroundSize() {
    if (!isDesktop) {
        document.querySelectorAll('.section').forEach(function(section) {
            section.style.backgroundSize = `auto ${viewportHeight * 1.1}px`;
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    if (!isDesktop) {
        setDynamicBackgroundSize() 
    }    
    
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

window.addEventListener('load', function() {
    if (!isDesktop) {
        setDynamicBackgroundSize() 
    }    
});

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            let scrolled = window.pageYOffset;

            document.querySelectorAll('.section').forEach(function(section) {
                let speed = section.getAttribute('data-speed');
                if (speed) {
                    let yPos = -(scrolled * speed);
                    if (isDesktop) {
                        section.style.backgroundPosition = '50% ' + yPos + 'px';
                    }
                    else {
                        section.style.backgroundPosition = 'right ' + yPos + 'px';
                        section.style.backgroundSize = `auto ${viewportHeight * 1.1}px`;
                    }
                }
            });

            ticking = false; // Reset the ticking flag
        });

        ticking = true;
    }
});
