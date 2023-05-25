const languageBox = document.querySelector('.language-box');
const languageToolBarBtn = document.querySelector('.tool-language-box');

function modalShow() {
    languageBox.style.opacity = '1';
}

function modalHidden(e) {
    const hidden = e.composedPath().includes(languageBox);
    if (!hidden && e.target != languageToolBarBtn) {
        languageBox.style.opacity = '0';
    }
}

languageToolBarBtn.addEventListener('click', modalShow)

document.addEventListener('click', modalHidden)