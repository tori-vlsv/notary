function callback() {
  let form = $('.popup form');
  let dropdown = $('.dropdown-value');
  if (form) {
    form.submit(function(e) {
      e.preventDefault();
      fetch('assets/files/callback.php', {
        method: 'POST',
        body: new FormData(form.get(0))
      }).then(() => {
        dropdown.text('Тема вопроса').css('color', '#9ca3af');
        form.get(0).reset();
      });
    });
  }
}
callback();