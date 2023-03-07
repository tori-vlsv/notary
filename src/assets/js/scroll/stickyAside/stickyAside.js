import StickySidebar from 'sticky-sidebar';

function stickyAside() {
  if ($('.post__sidebar').length > 0) {
    new StickySidebar('.post__sidebar', {
      containerSelector: '.post__wrapper ',
      innerWrapperSelector: '.post__sidebar__container',
      topSpacing: 200,
      bottomSpacing: 20,
      resizeSensor: true
    });
  }
}
stickyAside();