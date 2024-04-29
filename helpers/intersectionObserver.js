const getObserver = (callback, options) => new IntersectionObserver(callback, options);

export default getObserver;
