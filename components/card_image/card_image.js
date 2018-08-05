function subscribe_to_lazy_load() {
    let options = {
        root: null,
        rootMargin: '0px',
    };
    let observer = new IntersectionObserver(callback, options);
    let callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var src = entry.target.dataset.src;
                entry.target.setAttribute('src', src);
            }
        });
    };
    observer.observe(el);
}