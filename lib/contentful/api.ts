import { env } from '@/env';
import { createClient } from 'contentful';
import contentfulClient from './getClient';

export interface BlogProps {
  sys: {
    id: string;
  };
  slug: string;
  title: string;
  summary: string;
  author: string;
  heroImage?: {
    sys: {
      id: string;
    };
    url: string;
  };
  categoryName: string;
  date: Date;
  details: {
    json: any;
    links?: any;
  };
}

// Set a variable that contains all the fields needed for blogs when a fetch for content is performed
const BLOG_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug

`;

async function fetchGraphQL(
  query: string,
  preview = false,
  tags: [string] = ['']
) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${env.CONTENTFUL_SPACE_ID}/environments/${
      env.CONTENTFUL_ENVIRONMENT
    }`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve draft or published content
        Authorization: `Bearer ${
          preview
            ? env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Add a Next.js specific header with tags to revalidate the content:
      // Associate all fetches for blogs with an "blogs" cache tag so content can be revalidated or updated from Contentful on publish
      next: { tags },
    }
  ).then((response) => response.json());
}

function extractBlogEntries(fetchResponse: any,type:any) {
  return fetchResponse?.data?.[type].items;
}

export async function getAllBlogs(limit = 3, isDraftMode = false) {
  const blogs = await fetchGraphQL(
    `query {
      blogPostCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
          items {
            ${BLOG_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
    ['blogs']
  );

  return extractBlogEntries(blogs,'blogPostCollection');
}

export async function getBlog(slug: string, isDraftMode = false) {
  const blog = await fetchGraphQL(
    `query {
      blogPostCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
          items {
            ${BLOG_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
    [slug]
  );
  return extractBlogEntries(blog, 'blogPostCollection')[0];
}
export async function getGenericPage(slug: string, isDraftMode = false) {
  const homepage = await fetchGraphQL(
  `query {
    modelGenericPageCollection(where:{slug:{slug:"${slug}"}}){
     items{
      sys{
        id
      }
      title
      componentsCollection{
        items{
          ... on PartBrandCarousel{
            sys{
              id
              
            }
            
          
            
          }  
           ... on PartBrandCarousel{
            sys{
              id
            }
          } 
           ... on PartResults{
            sys{
              id
            }
          } 
           ... on PartButtonTiles{
            sys{
              id
            }
          }
           ... on PartMediaCarousel{
            sys{
              id
            }
          }
           ... on PartTestimonials{
            sys{
              id
            }
          }
           ... on PartResults{
            sys{
              id
            }
          }
           ... on PartButtonTiles{
            sys{
              id
            }
          }
           ... on PartMediaCarousel{
            sys{
              id
            }
          }
           ... on PartVideo{
            sys{
              id
            }
            
          }
          __typename
        }
      }
    }
      
    }
  }`,
    isDraftMode,
    [slug]
  );
  return extractBlogEntries(homepage, 'modelGenericPageCollection')[0];
}
export async function getBrandCarousel(id: string, isDraftMode = false) {
  const homepage = await fetchGraphQL(
  `query {
    partBrandCarousel(id: "${id}") {
      sys {
        id
      }
      title {
        json
      }
      description {
        json
      }
      logos: logosCollection {
        items {
          media {
            url
            fileName
            url
            contentType
          }
          mediaFit
          customButtonStyle {
            name
            backgroundColor
            hoverBackgroundColor
            fontColor
            borderSize
            borderColor
            backgroundColor
            hoverBorderColor
            hoverBackgroundColor
            borderSize
            hoverBorderSize
          }
        }
      }
      timeToChange
      customStyle {
        showTitle
        titleAlign
        titleColor
        useTitleUnderline
        underlineColors
        showDescription
        descriptionAlign
        descriptionColor
        fontColor
        marginTop
        marginBottom
        paddingTop
        paddingBottom
        backgroundImageFit
        backgroundStyle
        backgroundColor1
        backgroundColor2
        displayedForLang
        backgroundImage{
          url
          contentType
          fileName
        }
      }
    }
  }
  `,
    isDraftMode,
    [id]
  );
  return homepage.data.partBrandCarousel;
}
export async function getMediaCarousel(id: string, isDraftMode = false) {
  const homepage = await fetchGraphQL(
  `query {
    partMediaCarousel(id: "${id}") {
      sys {
        id
      }
      title {
        json
      }
      slidesCollection(where:{sys:{publishedAt_exists:true}}) {
        items {
          sys {
            id
          }
          title{
            json
          }
          description{
            json
          }
          media {
            fileName
            contentType
            url
          }
          buttonLabel
          color1
          url
          color2
          customButtonStyle {
            backgroundColor
            fontColor
            borderSize
            borderColor
            hoverBackgroundColor
            hoverFontColor
            hoverBorderSize
            hoverBorderColor
          }
        }
      }
      customStyle {
        showTitle
        titleAlign
        titleColor
        useTitleUnderline
        underlineColors
        showDescription
        descriptionAlign
        descriptionColor
        fontColor
        marginTop
        marginBottom
        paddingTop
        paddingBottom
        backgroundImageFit
        backgroundStyle
        backgroundColor1
        backgroundColor2
        displayedForLang
        backgroundImage{
          fileName
          url
          contentType
        }
      }
      slideDuration
      styleCarousel
      indicators {
        style
        indicator1 {
          url
          contentType
          width
          height
        }
        indicator2 {
          url
          contentType
          width
          height
        }
        indicator3 {
          url
          contentType
          width
          height
        }
        indicator4 {
          url
          contentType
          width
          height
        }
      }
    }
  }
  `,
    isDraftMode,
    [id]
  );
  return homepage.data.partMediaCarousel;
}
export async function getModelMenus(isDraftMode = false) {
  const homepage = await fetchGraphQL(
  `query {
    modelMenuCollection{
      items{
        name
        menuElementsCollection{
           items{
            sys{
              id
            } 
            
          }
        }
        
      }
    }
  }`,
    isDraftMode
  );
  return homepage.data.modelMenuCollection.items[0].menuElementsCollection.items;
}
export async function getModelMenusElements(menuIds: string[] ,isDraftMode = false) {
  console.log(menuIds , "menuids")
  const homepage = await fetchGraphQL(
    `query {
      menuElementCollection(where:{sys:{id_in:[${menuIds}]}}){
        items{
          name
         url{
           slug
         }
         elements:elementsCollection{
           items{
             sys{
               id
             }
             name
           }
         }
        }
     }
     }`,
    isDraftMode
  );
  console.log(homepage , "homepage")
  return homepage.data.menuElementCollection.items;
}
export async function getlMenusElements(menuIds: string[] ,isDraftMode = false) {
  console.log(menuIds , "menuids")
  const homepage = await fetchGraphQL(
    `query {
      menuElementCollection(where:{sys:{id_in:[${menuIds}]}}){
        items{
          name
         url{
           slug
         }
         elements:elementsCollection{
           items{
             sys{
               id
             }
             name
           }
         }
        }
     }
     }`,
    isDraftMode
  );
  console.log(homepage , "homepage")
  return homepage.data.menuElementCollection.items;
}
export async function getSingleMenuElement(id:string ,isDraftMode = false) {
  const homepage = await fetchGraphQL(
      `query{ 
        menuElement(id:"${id}"){
          name
          url{
            slug
          }
        }
      }`,
    isDraftMode
  );
  console.log(homepage , "menuElement single")
  return homepage.data.menuElement;
}