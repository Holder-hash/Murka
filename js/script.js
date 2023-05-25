//Скролл к карточкам по нажатию кнопки "ПОДРОБНЕЕ"
$("#moreBtn").click(function() {
  $('html, body').animate({
  scrollTop: $(".count-info").offset().top
  }, 350);
 });


