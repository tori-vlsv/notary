function popupItems() {
  let button = $('.dropdown');
  button.on('click', function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().hide();
    } else {
      $(this).addClass('active');
      $(this).next().show();
    }
    
  });
  button.next().children('.dropdown-item').on('click', function() {
    button.children('.dropdown-value').text($(this).text()).css('color', '#000000');
    button.children('input').val($(this).text());
    $(this).parent().hide();
    button.removeClass('active');
  });
}
popupItems();