function toggleTableItems() {
  let button = $('.post__table__header');
  let closedButton = $('.post__table__header.closed');
  for (let i = 0; i < button.length; i++) {
    $(button[i]).on('click', function() {
      if (i + 1 == button.length) {
        $(this).toggleClass('rounded');
      }
      $(this).toggleClass('closed');
      $(this).nextUntil(button).toggle();
    });
    if (button.hasClass('closed')) {
      closedButton.nextUntil(button).hide();
    }
  }
}
toggleTableItems();