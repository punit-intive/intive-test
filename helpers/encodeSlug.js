const encodeSlug = tag => encodeURIComponent(tag).replace("%20", "+");

export default encodeSlug;
