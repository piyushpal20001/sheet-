

// Smooth scrolling to sections
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(this.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Shop Now button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        alert('Welcome to Kitabi Duniya! Start exploring our book collection.');
    });
}

// Scroll Up Button
const scrollUpBtn = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
});

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

