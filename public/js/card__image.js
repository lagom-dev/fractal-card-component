function subscribe_to_lazy_load(el) {
    let options = {
        root: null,
        rootMargin: '0px',
    };
    let callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var src = entry.target.dataset.src;
                entry.target.setAttribute('src', src);
            }
        });
    };
    let observer = new IntersectionObserver(callback, options);
    //console.log(el);
    observer.observe(el);
}