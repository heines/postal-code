const pageScroll = require('./page-scroll').default;

export default function() {
  const scroll = document.querySelectorAll('.js-anchor-link');
  for (var i = 0; i < scroll.length; i++) {
    let hashName = scroll[i].getAttribute("href").slice(1);
    let offset = 0;
    let offsetSp = 0;
    let offsetUp;
    let offsetSpUp;
    if(scroll[i].dataset.offset) {
      offset = scroll[i].dataset.offset;
    }
    if(scroll[i].dataset.offsetsp) {
      offsetSp = scroll[i].dataset.offsetsp;
    }
    if(scroll[i].dataset.offsetUp) {
      offsetUp = scroll[i].dataset.offsetUp;
    }
    if(scroll[i].dataset.offsetspUp) {
      offsetSpUp = scroll[i].dataset.offsetspUp;
    }
    scroll[i].addEventListener('click', (e)=> {
      e.preventDefault();
      const y = window.pageYOffset;
      const target = document.getElementById(hashName);
      if(target) {
        const rect = target.getBoundingClientRect();
        let top;
        if ((rect.top < offsetUp) && (offsetUp || offsetSpUp) ) {
          top = rect.top - offsetUp;
        } else {
          top = rect.top - offset;
        }
        pageScroll(y, y + top);
      }
    }, false);
  }
}
