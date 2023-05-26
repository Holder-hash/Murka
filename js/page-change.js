const headerMainBox = document.querySelector('.header-main-box');
const headerImg = document.querySelector('.header_img');
const header = document.querySelector('header');
const main = document.querySelector('main');
const loading = document.querySelector('.loading');

const documentationContent = document.querySelector('.documentation-content');
const commandsContent = document.querySelector('.commands-content');
const statisticContent = document.querySelector('.statistic-content');
const supportUsContent = document.querySelector('.supportUs-content');


// ГЛАВНАЯ
var isMain = true;

function mainPage() {
    isMain = true;
 
    headerMainBox.style = 'opacity: 1'
    main.style = 'display: block'
    main.style = 'opacity: 1';
    headerImg.style = `background-image: url('../media/header_img.png')`
    headerImg.style = 'background-position-x: center';
    headerImg.style = 'background-repeat: no-repeat;';
    header.style = 'height: 760px;'

    documentationContent.style = 'opacity: 0';

    if (!isMain) {
        loading.style = 'opacity: 1';
        setTimeout("loading.style = 'opacity: 0';", 400);
    }

}

// ДОКУМЕНТАЦИЯ
function documentationPage() {
    isMain = false;
    loading.style = 'opacity: 1';
    headerMainBox.style = 'opacity: 0';
    main.style = 'opacity: 0';
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;
    setTimeout("main.style = 'display: none'", 500);

    commandsContent.style = `opacity: 0; display: none;`;
    statisticContent.style = `opacity: 0; display: none;`;
    supportUsContent.style = `opacity: 0; display: none;`;

    documentationContent.style = `opacity: 1; display: block;`;

    setTimeout("loading.style = 'opacity: 0';", 400);
}

// КОМАНДЫ
function commandsPage() {
    isMain = false;
    loading.style = 'opacity: 1';
    headerMainBox.style = 'opacity: 0';
    main.style = 'opacity: 0';
    setTimeout("main.style = 'display: none'", 500);
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;

    documentationContent.style = `opacity: 0; display: none;`;
    statisticContent.style = `opacity: 0; display: none;`;
    supportUsContent.style = `opacity: 0; display: none;`;

    commandsContent.style = `opacity: 1; display: block;`;

    setTimeout("loading.style = 'opacity: 0';", 400);
}

// СТАТИСТИКА
function statisticPage() {
    isMain = false;
    loading.style = 'opacity: 1';
    headerMainBox.style = 'opacity: 0';
    main.style = 'opacity: 0';
    setTimeout("main.style = 'display: none'", 500);
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;

    documentationContent.style = `opacity: 0; display: none;`;
    commandsContent.style = `opacity: 0; display: none;`;
    supportUsContent.style = `opacity: 0; display: none;`;

    statisticContent.style = `opacity: 1; display: block;`;

    setTimeout("loading.style = 'opacity: 0';", 400);
}

// ПОДДЕРЖИТЕ НАС
function supportUsPage() {
    isMain = false;
    loading.style = 'opacity: 1';
    headerMainBox.style = 'opacity: 0';
    main.style = 'opacity: 0';
    setTimeout("main.style = 'display: none'", 500);
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;

    documentationContent.style = `opacity: 0; display: none;`;
    commandsContent.style = `opacity: 0; display: none;`;
    statisticContent.style = `opacity: 0; display: none;`;

    supportUsContent.style = `opacity: 1; display: block;`;

    setTimeout("loading.style = 'opacity: 0';", 400);
}

document.querySelector('#page-main').addEventListener('click', mainPage)
document.querySelector('#page-documentation').addEventListener('click', documentationPage)
document.querySelector('#page-commands').addEventListener('click', commandsPage)
document.querySelector('#page-statistic').addEventListener('click', statisticPage)
document.querySelector('#page-supportUs').addEventListener('click', supportUsPage)