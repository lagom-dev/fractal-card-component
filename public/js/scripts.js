
function subscribe(el) {
  console.log(el);
  observer.observe(el);
}

var options = {
  root: document.querySelector('.card-container'),
  rootMargin: '100px',

}

var callback = function (entries, observer) {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
    console.log(entries);
    if ( entry.isIntersecting) {
      var src = entry.target.dataset.src;
      entry.target.setAttribute('src', src);
    }
  });
};

var observer = new IntersectionObserver(callback, options);







































































































