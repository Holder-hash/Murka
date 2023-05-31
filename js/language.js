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

// lang change

const languageBtnENG = document.querySelector('.language-box-us');
const languageBtnRUS = document.querySelector('.language-box-ru');

function translateENG() {
    localStorage.setItem('english', 'true');

    document.getElementById('pageDocumentation').textContent = 'documentation'
}

function translateRUS() {
    localStorage.setItem('english', 'false')

    document.getElementById('pageDocumentation').textContent = 'документация'
}

languageBtnENG.addEventListener('click', translateENG);
languageBtnRUS.addEventListener('click', translateRUS);

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('english') == 'true') {
        translateENG()
    }
    else {
        translateRUS()
    }
});