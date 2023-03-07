function toggleActionsOnMobile() {
  let button = $('.actions__item__toggle');
  button.on('click', function() {
    $(this).parent().parent().toggleClass('hiddenOnMobile');
    button.not(this).parent().parent().addClass('hiddenOnMobile');
  });
}
toggleActionsOnMobile();