const headerMainBox = document.querySelector('.header-main-box');
const headerImg = document.querySelector('.header_img');
const header = document.querySelector('header');
const main = document.querySelector('main');
const loading = document.querySelector('.loading');

const footer = document.querySelector('footer');
const footerImg = document.querySelector('.footer_img');

const documentationContent = document.querySelector('.documentation-content');
const commandsContent = document.querySelector('.commands-content');
const statisticContent = document.querySelector('.statistic-content');
const supportUsContent = document.querySelector('.supportUs-content');


// ГЛАВНАЯ
var isMain = true;

function mainPage() {
    isMain = true;
 
    headerMainBox.style = `opacity: 1; display: flex`;
    main.style = 'display: flex'
    main.style = 'opacity: 1';
    headerImg.style = `background-image: url('../media/header_img.png')`
    headerImg.style = 'background-position-x: center';
    headerImg.style = 'background-repeat: no-repeat;';
    header.style = 'height: 760px;';

    footer.style = `height: 900px;`;
    document.querySelector('.countenier_btn').style = 'display: flex';
    document.querySelector('.countenier_footer').style = 'height: 350px;';
    footerImg.style = `background-image: url('../media/footer_img.png')`
    footerImg.style = 'background-position-x: center';
    footerImg.style = 'background-repeat: no-repeat;';

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
    headerMainBox.style = `opacity: 0; display: none`;
    main.style = `opacity: 0; `;
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;
    setTimeout("main.style = 'display: none'", 500);

    footer.style = `height: 175px;`;
    footerImg.style = `background-image: none; background-color: #fd78dc;`;
    document.querySelector('.countenier_btn').style = 'display:none'
    document.querySelector('.countenier_footer').style = 'height:175px;'

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
    headerMainBox.style = `opacity: 0; display: none`;
    main.style = 'opacity: 0';
    setTimeout("main.style = 'display: none'", 500);
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;

    footer.style = `height: 175px;`;
    footerImg.style = `background-image: none; background-color: #fd78dc;`;
    document.querySelector('.countenier_btn').style = 'display:none'
    document.querySelector('.countenier_footer').style = 'height:175px;'

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
    headerMainBox.style = `opacity: 0; display: none`;
    main.style = 'opacity: 0';
    setTimeout("main.style = 'display: none'", 500);
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;

    footer.style = `height: 175px;`;
    footerImg.style = `background-image: none; background-color: #fd78dc;`;
    document.querySelector('.countenier_btn').style = 'display:none'
    document.querySelector('.countenier_footer').style = 'height:175px;'

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
    headerMainBox.style = `opacity: 0; display: none`;
    main.style = 'opacity: 0';
    setTimeout("main.style = 'display: none'", 500);
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;

    footer.style = `height: 175px;`;
    footerImg.style = `background-image: none; background-color: #fd78dc;`;
    document.querySelector('.countenier_btn').style = 'display:none'
    document.querySelector('.countenier_footer').style = 'height:175px;'

    documentationContent.style = `opacity: 0; display: none;`;
    commandsContent.style = `opacity: 0; display: none;`;
    statisticContent.style = `opacity: 0; display: none;`;

    supportUsContent.style = `opacity: 1; display: block;`;

    setTimeout("loading.style = 'opacity: 0';", 400);
}

document.querySelector('#page-main').addEventListener('click', mainPage);
document.querySelector('#page-documentation').addEventListener('click', documentationPage);
document.querySelector('#page-commands').addEventListener('click', commandsPage);
document.querySelector('#page-statistic').addEventListener('click', statisticPage);
document.querySelector('#page-supportUs').addEventListener('click', supportUsPage);