const sections = document.querySelectorAll('section');
const sectionIds = [];

sections.forEach((section) => {
    sectionIds.push(section.id);
});

const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const currentPos = window.pageYOffset;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        } else {
            navLinks.forEach((link) => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.remove('active');
                }
            });
        }
    });
});
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navbarHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
});
const readMoreBtn = document.getElementById('read-more-btn');

readMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // add your code to display more content here
});

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}