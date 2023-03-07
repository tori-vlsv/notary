function toggleAsideItems() {
  let button = $('.post__sidebar__toggle');
  button.on('click', function() {
    if ($(this).hasClass('opened')) {
      $(this).removeClass('opened')
      $(this).next().slideUp(function() {
      });
    } else {
      $(this).addClass('opened')
      $(this).next().slideDown(function() {
      });
    }
  });
  Array.from(button).forEach(element => {
    if (!$(element).hasClass('opened')) {
      $(element).next().hide();
    }
  });
}
toggleAsideItems();