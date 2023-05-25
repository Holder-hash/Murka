const languageBox = document.querySelector('.language-box');
const languageToolBarBtn = document.querySelector('.tool-language-box');

languageToolBarBtn.addEventListener('click', () => {
    languageBox.style.opacity = '1';
})

document.addEventListener('click', (e) => {
    const hidden = e.composedPath().includes(languageBox);
    if (!hidden && e.target != languageToolBarBtn) {
        languageBox.style.opacity = '0';
    }
})