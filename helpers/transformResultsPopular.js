import * as makeSlug from "./makeSlug";

const transformResultsPopular = resultsPopular => {
  if (!resultsPopular || (resultsPopular && !resultsPopular.length)) {
    return null;
  }

  const getBlogUrl = (isCareers, slug) => `${isCareers ? "careers" : "insights"}/${makeSlug(slug)}`;

  return resultsPopular.map(popular => ({
    id: popular.id,
    title: popular.title,
    path: popular.slugRaw ? getBlogUrl(popular.isIntiveLifecarrersInsight, popular.slugRaw) : popular.slug.slug,
    date: popular.updatedAt,
    type: popular.slug?.slug ? "page" : "blogpost"
  }));
};

export default transformResultsPopular;
