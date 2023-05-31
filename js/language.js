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
    document.getElementById('pageCommands').textContent = 'commands'
    document.getElementById('pageStatistic').textContent = 'statistics'
    document.getElementById('pageSupportUs').textContent = 'support us'

    document.querySelector('.hint_box_text').textContent = 'community'
    document.querySelector('.tool-bar___login-box p').textContent = 'sign in'
    document.querySelector('.header-main-box___text-box p').textContent = 'Upload music to your server'
    document.querySelector('.header-main-box___add-ds-button span').textContent = 'ADD TO DISCORD'
    document.querySelector('.header-main-box___more-button span').textContent = 'MORE'
    
}

function translateRUS() {
    localStorage.setItem('english', 'false')

    document.getElementById('pageDocumentation').textContent = 'документация'
    document.getElementById('pageCommands').textContent = 'команды'
    document.getElementById('pageStatistic').textContent = 'статистика'
    document.getElementById('pageSupportUs').textContent = 'поддержите нас'

    document.querySelector('.hint_box_text').textContent = 'сообщество'
    document.querySelector('.tool-bar___login-box p').textContent = 'Войти'
    document.querySelector('.header-main-box___text-box p').textContent = 'Залей музыки в свой сервер'
    document.querySelector('.header-main-box___add-ds-button span').textContent = 'ДОБАВИТЬ В DISCOR'
    document.querySelector('.header-main-box___more-button span').textContent = 'ПОДРОБНЕЕ'

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