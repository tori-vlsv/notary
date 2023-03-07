function actionsOnScroll() {
  let block = $('.actions__item__body');
  block.on('scroll', function() {
    if ($(this).scrollTop() > 0) {
      $(this).parent().addClass('scrolled');
    } else {
      $(this).parent().removeClass('scrolled');
    }
  });
  if ($(window).width() >= 1360) {
    for (let i = 0; i < block.length; i++) {
      console.log($(block[i]).children('ul').height())
      if ($(block[i]).children('ul').height() <= 370) {
        $(block[i]).parent().addClass('scrolled');
      }
    }
  }
}
actionsOnScroll();