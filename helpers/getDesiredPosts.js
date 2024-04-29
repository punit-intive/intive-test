const getDesiredPosts = (posts, languageISO, quantity) =>
  posts
    .filter(post => {
      const desiredLanguages = post.desiredLanguage?.split(";").filter(x => x !== "");

      return (desiredLanguages?.length && desiredLanguages?.includes(languageISO)) || !desiredLanguages;
    })
    .slice(0, quantity);

export default getDesiredPosts;
