const header = document.querySelector('header')

document.addEventListener('DOMContentLoaded', function() {
    header.classList.toggle('little-header')
    document.querySelector('.header-main-box').style = 'display: none'
})
