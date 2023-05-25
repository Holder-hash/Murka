function darkMode() {
    const body = document.body;
    const wrapper = document.querySelector('.wrapper');
    const subBlockHeader = document.querySelectorAll('.sub-block-header');
    const subBlockDescription = document.querySelectorAll('.sub-block-description');
    const wasDarkMode = localStorage.getItem('darkMode') === 'true';

    subBlockHeader.forEach(header => {
        header.classList.toggle('dark-mode-text', !wasDarkMode)   
    });

    subBlockDescription.forEach(description => {
        description.classList.toggle('dark-mode-text', !wasDarkMode)   
    });

    localStorage.setItem('darkMode', !wasDarkMode)
    body.classList.toggle('dark-mode', !wasDarkMode)
    wrapper.classList.toggle('dark-mode', !wasDarkMode)

    if (!wasDarkMode) {
        document.querySelector('.theme-btn').textContent = 'wb_sunny'
        // document.querySelector('.theme-btn').style = 'color: white'
    }
    else {
        document.querySelector('.theme-btn').textContent = 'dark_mode'
        // document.querySelector('.theme-btn').style = 'color: black'
    }

}

document.querySelector('.theme-btn').addEventListener('click', darkMode)

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true')
    document.querySelector('.wrapper').classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true')

    document.querySelectorAll('.sub-block-header').forEach(header => {
        header.classList.toggle('dark-mode-text', localStorage.getItem('darkMode') === 'true')   
    });

    document.querySelectorAll('.sub-block-description').forEach(description => {
        description.classList.toggle('dark-mode-text', localStorage.getItem('darkMode') === 'true')   
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.querySelector('.theme-btn').textContent = 'wb_sunny'
        // document.querySelector('.theme-btn').style = 'color: white'
    }
    else {
        document.querySelector('.theme-btn').textContent = 'dark_mode'
        // document.querySelector('.theme-btn').style = 'color: black'
    }
}

document.addEventListener('DOMContentLoaded', onload)