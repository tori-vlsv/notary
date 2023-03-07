function cookie() {
  let popup = $('.cookie');
  let close = $('.cookie button');
  let currentTimeStamp = +new Date();
  close.on('click', function() {
    popup.remove();
    localStorage.setItem('newYearPopup', 'closed');
    localStorage.setItem('newYearPopupTimeStamp', +new Date() + 86400000); // Показываем напоминание о куки каждые 24 часа
  });
  if (localStorage.newYearPopup !== undefined) {
    if (currentTimeStamp >= localStorage.newYearPopupTimeStamp) {
      localStorage.clear();
    }
    if (localStorage.getItem('newYearPopup') == 'closed') {
      popup.remove();
    }
  } else {
    popup.show();
  }
}
cookie();