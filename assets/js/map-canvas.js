for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
    star.style.setProperty('--delay', `${Math.random() * 4}s`);
    document.body.appendChild(star);
  }

const navItems = document.querySelectorAll('#nav-ul li a');
const infoBox = document.getElementById("info-box");
const infoText = infoBox.querySelector('p');
const typingSound = document.getElementById("typingSound");
let typingInterval;
const startTypingSound = () => {
    typingSound.currentTime = 0; 
    typingSound.play();
}
const stopTypingSound = () => {
    typingSound.pause();
    typingSound.currentTime = 0;
}
const typeText = (text) => {
    let i = 0;
    infoText.textContent = '';
    clearInterval(typingInterval);
    startTypingSound();
    typingInterval = setInterval(() => {
        if (i < text.length) {
            infoText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            stopTypingSound();
        }
    }, 100);
}
const showEffect = (event) => {
    const pageName = event.target.getAttribute('data-name');
    document.body.classList.add('blurred');
    infoBox.style.display = 'flex';
    typeText(pageName);
}
const hideEffect = () => {
    document.body.classList.remove('blurred');
    infoBox.style.display = 'none';
    clearInterval(typingInterval);
    stopTypingSound();
}
navItems.forEach(navItem => {
    navItem.addEventListener('mouseenter', showEffect);
    navItem.addEventListener('mouseleave', hideEffect);
});  