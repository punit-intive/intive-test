import { graphql, useStaticQuery } from "gatsby";

const useSearchIndex = () => {
  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);

  return localSearchPages;
};

export default useSearchIndex;
