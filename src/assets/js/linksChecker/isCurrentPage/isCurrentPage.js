import $ from "jquery";

function isCurrentPage() {
  const page = window.location.pathname;
  const url = window.location.href;
  if (page == page) {
    $(`a[href="${page}"]`).on("click", function (e) {
      e.preventDefault();
    });
    $(`a[href="${page}"]`).addClass('active');
  }
}
isCurrentPage();
