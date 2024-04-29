import { graphql, useStaticQuery } from "gatsby";

const useIndustries = lang => {
  const {
    allContentfulModelWorkIndustry: { nodes }
  } = useStaticQuery(graphql`
    query {
      allContentfulModelWorkIndustry {
        nodes {
          name
          tags {
            tag
          }
          node_locale
        }
      }
    }
  `);

  return nodes.filter(node => node.node_locale.includes(lang));
};

export default useIndustries;
