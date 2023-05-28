const header = document.querySelector('header')
const footer = document.querySelector('footer')

document.addEventListener('DOMContentLoaded', function() {
    header.classList.toggle('little-header')
    document.querySelector('.header-main-box').style = 'display: none'

    footer.classList.toggle('little-footer')
    document.querySelector('.countenier_btn').style = 'display: none'
    document.querySelector('.countenier_footer').style = 'height: 200px'

})
