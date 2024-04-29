import __ from "./translate";

const getBlogPostBackLink = ({ back, isCultureBlog, language }) => {
  if (!isCultureBlog) {
    return { text: __("blogPost.link.back", language), to: back || "insights" };
  }

  const isCareers = back?.includes("careers");
  const translation = isCareers ? "blogPost.careers.link.back" : "blogPost.cultureblog.link.back";
  const slugBack = isCareers ? back : "careers/cultureblog";

  return { text: __(translation, language), to: slugBack };
};

const getArticleTeaserBackLink = isBrandingPage => (isBrandingPage ? "careers/cultureblog" : "insights");

export { getArticleTeaserBackLink, getBlogPostBackLink };
