const headerMainBox = document.querySelector('.header-main-box');
const headerImg = document.querySelector('.header_img');
const header = document.querySelector('header');
const main = document.querySelector('main');
const loading = document.querySelector('.loading');

const documentationContent = document.querySelector('.documentation-content');

document.querySelector('#page-documentation').addEventListener('click', () => {
    loading.style = 'opacity: 1';
    headerMainBox.style = 'opacity: 0';
    main.style = 'opacity: 0';
    setTimeout("main.style = 'display: none'", 500);
    headerImg.style = 'background-image: none';
    header.style = `
    background-color: #fd78dc;
    height: 75px;
    `;

    documentationContent.style = 'opacity: 1';

    setTimeout("loading.style = 'opacity: 0';", 400);
})
