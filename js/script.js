const scrollToElement = document.querySelector('.count-info');
const scrollButton = document.querySelector('#scrollBtn');

scrollButton.addEventListener('click', () => {
  const elementPosition = scrollToElement.offsetTop;
  const scrollPosition = elementPosition - 100;
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
});