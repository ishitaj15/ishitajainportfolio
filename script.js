// Scroll animations
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.progress-bar');
    skills.forEach(skill => {
        if (window.scrollY + window.innerHeight >= skill.offsetTop + skill.clientHeight) {
            skill.style.width = skill.dataset.skillLevel;
        }
    });
});
