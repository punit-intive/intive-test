/* eslint-disable import/no-extraneous-dependencies */
import PageContext from "@contexts/PageContext";
import { withReactContext } from "storybook-react-context";

import { TemplateWithCustomStyle } from "../../../../.storybook/templates";
import MediaCarouselComponent from "./MediaCarousel";

export default {
  title: "Components/Galleries/MediaCarousel",
  component: MediaCarouselComponent,
  decorators: [
    withReactContext({
      Context: PageContext,
      initialState: {
        language: "en",
        location: {
          pathname: "/",
          search: "",
          hash: "",
          href: "http://localhost:6006/",
          origin: "http://localhost:6006",
          protocol: "http:",
          host: "localhost:6006",
          hostname: "localhost",
          port: "6006",
          state: null,
          key: "initial"
        },
        slug: "/"
      }
    })
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      inlineStories: true
    }
  },
  args: {
    title: {
      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","data":{},"content":[{"data":{},"marks":[],"value":"This is MediaCarousel component","nodeType":"text"}]}]}'
    },
    desc: {
      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","marks":[],"data":{}},{"nodeType":"text","value":"Aliquam faucibus orci","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" non felis ","marks":[],"data":{}},{"nodeType":"text","value":"tristique","marks":[{"type":"italic"}],"data":{}},{"nodeType":"text","value":" imperdiet. ","marks":[],"data":{}},{"nodeType":"text","value":"Praesent hendrerit","marks":[{"type":"underline"}],"data":{}},{"nodeType":"text","value":" augue sed fringilla dictum.","marks":[],"data":{}}]}]}'
    }
  },
  argTypes: {
    title: {
      description: "Title of the component"
    },
    desc: {
      description: "Description of the component"
    },
    slides: {
      description:
        "Slides to be rendered within component. The Contentful controls them so you can not modify here anything. Just for presentation purpose.",
      control: false
    },
    slideDuration: {
      description: "Duration of each slide in seconds",
      control: { type: "number" }
    },
    styleCarousel: {
      description: "Set style of carousel",
      control: { type: "select", options: ["classic", "parallel", "full-width", "full-width-clear", "revolver", "revolver-rect"] }
    },
    indicators: {
      description:
        "Indicators to be rendered within component. The Contentful controls them so you can not modify here anything. Just for presentation purpose.",
      control: false
    }
  }
};

export const MediaCarouselClassic = args => TemplateWithCustomStyle(args, MediaCarouselComponent);

MediaCarouselClassic.storyName = "Classic";

MediaCarouselClassic.args = {
  title: {
    raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","data":{},"content":[{"data":{},"marks":[],"value":"This is MediaCarousel Classic component","nodeType":"text"}]}]}'
  },
  slides: [
    {
      contentful_id: "1iqkFcGWwTC4JT75K0fHzY",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Less Stress!","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Learn more about our mental health program for employees","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "7veeS48YXS7NpwxoPDwY1t",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"intive Academies","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A beginner in Tech? Start and grow your career with us","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#081818",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "8pAG8X7914JkRpdUQnEtl",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Remote onboarding","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Feel welcome and well-informed from day one","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    }
  ],
  slideDuration: 5,
  styleCarousel: "classic",
  indicators: {
    style: "dots",
    indicator1: {
      file: {
        contentType: "image/png",
        fileName: "dot-active.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#0868c8",
        width: 1,
        height: 1
      }
    },
    indicator2: {
      file: {
        contentType: "image/png",
        fileName: "dot.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#98a8b8",
        width: 1,
        height: 1
      }
    }
  }
};

export const MediaCarouselFullWidth = args => TemplateWithCustomStyle(args, MediaCarouselComponent);

MediaCarouselFullWidth.storyName = "FullWidth";

MediaCarouselFullWidth.args = {
  title: {
    raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","data":{},"content":[{"data":{},"marks":[],"value":"This is MediaCarousel FullWidth component","nodeType":"text"}]}]}'
  },
  slides: [
    {
      contentful_id: "1iqkFcGWwTC4JT75K0fHzY",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Less Stress!","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Learn more about our mental health program for employees","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "7veeS48YXS7NpwxoPDwY1t",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"intive Academies","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A beginner in Tech? Start and grow your career with us","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#081818",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "8pAG8X7914JkRpdUQnEtl",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Remote onboarding","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Feel welcome and well-informed from day one","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    }
  ],
  slideDuration: 5,
  styleCarousel: "full-width",
  indicators: {
    style: "dots",
    indicator1: {
      file: {
        contentType: "image/png",
        fileName: "dot-active.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#0868c8",
        width: 1,
        height: 1
      }
    },
    indicator2: {
      file: {
        contentType: "image/png",
        fileName: "dot.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#98a8b8",
        width: 1,
        height: 1
      }
    }
  },
  showTitle: false,
  showDescription: false
};

export const MediaCarouselFullWidthClear = args => TemplateWithCustomStyle(args, MediaCarouselComponent);

MediaCarouselFullWidthClear.storyName = "FullWidthClear";

MediaCarouselFullWidthClear.args = {
  title: {
    raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","data":{},"content":[{"data":{},"marks":[],"value":"This is MediaCarousel FullWidthClear component","nodeType":"text"}]}]}'
  },
  slides: [
    {
      contentful_id: "7sVdyVrLN1QVCMnlvcHl7O",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Hybrid work","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Explore our perfect mixture of remote and in-office work","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "nkNWdxkJIGkA8pxQ6LC1Y",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Easy recruitment","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A practical guide to our recruitment process","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=450&h=225&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=750&h=375&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1080&h=540&q=100&fm=webp&bg=transparent 1080w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1366&h=683&q=100&fm=webp&bg=transparent 1366w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=webp&bg=transparent 1810w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=450&h=225&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=750&h=375&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1080&h=540&q=100&fm=png&bg=transparent 1080w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1366&h=683&q=100&fm=png&bg=transparent 1366w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=png&bg=transparent 1810w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#383878",
          width: 1,
          height: 0.5
        }
      }
    },
    {
      contentful_id: "8pAG8X7914JkRpdUQnEtl",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Remote onboarding","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Feel welcome and well-informed from day one","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "7veeS48YXS7NpwxoPDwY1t",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"intive Academies","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A beginner in Tech? Start and grow your career with us","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#081818",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "1iqkFcGWwTC4JT75K0fHzY",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Less Stress!","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Learn more about our mental health program for employees","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    }
  ],
  slideDuration: 5,
  styleCarousel: "full-width-clear",
  indicators: {
    style: "dots",
    indicator1: {
      file: {
        contentType: "image/png",
        fileName: "dot-active.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#0868c8",
        width: 1,
        height: 1
      }
    },
    indicator2: {
      file: {
        contentType: "image/png",
        fileName: "dot.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#98a8b8",
        width: 1,
        height: 1
      }
    }
  },
  showTitle: false,
  showDescription: false
};

export const MediaCarouselRevolver = args => TemplateWithCustomStyle(args, MediaCarouselComponent);

MediaCarouselRevolver.storyName = "Revolver";

MediaCarouselRevolver.args = {
  title: {
    raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","data":{},"content":[{"data":{},"marks":[],"value":"This is MediaCarousel Revolver component","nodeType":"text"}]}]}'
  },
  slides: [
    {
      contentful_id: "37aHBLy6PXuIOgv5cDvDYH",
      title: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Esprit","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Esprit","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Esprit & intive take up omnichannel","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=450&h=474&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=750&h=789&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=822&h=865&q=100&fm=webp&bg=transparent 822w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=822&h=865&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=450&h=474&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=750&h=789&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=822&h=865&q=100&fm=png&bg=transparent 822w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#181818",
          width: 1,
          height: 1.0523114355231145
        }
      }
    },
    {
      contentful_id: "5t07DmvVJbKeqmdJDjz3XL",
      title: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Insight","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Insight","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Mobile First: Fuel for a Holistic Shopping Experience","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=450&h=474&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=750&h=789&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=822&h=865&q=100&fm=webp&bg=transparent 822w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=822&h=865&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=450&h=474&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=750&h=789&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=822&h=865&q=100&fm=png&bg=transparent 822w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#282828",
          width: 1,
          height: 1.0523114355231145
        }
      }
    },
    {
      contentful_id: "7sVdyVrLN1QVCMnlvcHl7O",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Hybrid work","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Explore our perfect mixture of remote and in-office work","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "nkNWdxkJIGkA8pxQ6LC1Y",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Easy recruitment","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A practical guide to our recruitment process","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=450&h=225&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=750&h=375&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1080&h=540&q=100&fm=webp&bg=transparent 1080w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1366&h=683&q=100&fm=webp&bg=transparent 1366w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=webp&bg=transparent 1810w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=450&h=225&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=750&h=375&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1080&h=540&q=100&fm=png&bg=transparent 1080w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1366&h=683&q=100&fm=png&bg=transparent 1366w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=png&bg=transparent 1810w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#383878",
          width: 1,
          height: 0.5
        }
      }
    },
    {
      contentful_id: "8pAG8X7914JkRpdUQnEtl",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Remote onboarding","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Feel welcome and well-informed from day one","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "7veeS48YXS7NpwxoPDwY1t",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"intive Academies","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A beginner in Tech? Start and grow your career with us","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#081818",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "1iqkFcGWwTC4JT75K0fHzY",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Less Stress!","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Learn more about our mental health program for employees","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    }
  ],
  slideDuration: 5,
  styleCarousel: "revolver",
  indicators: {
    style: "dots",
    indicator1: {
      file: {
        contentType: "image/png",
        fileName: "dot-active.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#0868c8",
        width: 1,
        height: 1
      }
    },
    indicator2: {
      file: {
        contentType: "image/png",
        fileName: "dot.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#98a8b8",
        width: 1,
        height: 1
      }
    }
  },
  showTitle: false,
  showDescription: false
};

export const MediaCarouselRevolverRectangle = args => TemplateWithCustomStyle(args, MediaCarouselComponent);

MediaCarouselRevolverRectangle.storyName = "RevolverRectangle";

MediaCarouselRevolverRectangle.args = {
  title: {
    raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","data":{},"content":[{"data":{},"marks":[],"value":"This is MediaCarousel RevolverRectangle component","nodeType":"text"}]}]}'
  },
  slides: [
    {
      contentful_id: "37aHBLy6PXuIOgv5cDvDYH",
      title: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Esprit","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Esprit","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Esprit & intive take up omnichannel","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=450&h=474&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=750&h=789&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=822&h=865&q=100&fm=webp&bg=transparent 822w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=822&h=865&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=450&h=474&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=750&h=789&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/10uo16n2vozMkVFJdLu5xg/2d2899807dd3ea3b598fa7bcbde90821/Carousel_2.png?w=822&h=865&q=100&fm=png&bg=transparent 822w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#181818",
          width: 1,
          height: 1.0523114355231145
        }
      }
    },
    {
      contentful_id: "5t07DmvVJbKeqmdJDjz3XL",
      title: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Insight","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Insight","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Mobile First: Fuel for a Holistic Shopping Experience","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=450&h=474&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=750&h=789&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=822&h=865&q=100&fm=webp&bg=transparent 822w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=822&h=865&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=450&h=474&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=750&h=789&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/2nfl5QGlFmzJVXjN7uE5cI/2957616326983227c085579d0a2b5826/Carousel_5.png?w=822&h=865&q=100&fm=png&bg=transparent 822w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#282828",
          width: 1,
          height: 1.0523114355231145
        }
      }
    },
    {
      contentful_id: "7sVdyVrLN1QVCMnlvcHl7O",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Hybrid work","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Explore our perfect mixture of remote and in-office work","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/w94lk6Tv7bR4qrrtb282Q/0d85a588b0b86b1e7e5cf9f210b3dd61/1_hybrid_work__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "nkNWdxkJIGkA8pxQ6LC1Y",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Easy recruitment","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A practical guide to our recruitment process","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=450&h=225&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=750&h=375&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1080&h=540&q=100&fm=webp&bg=transparent 1080w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1366&h=683&q=100&fm=webp&bg=transparent 1366w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=webp&bg=transparent 1810w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=450&h=225&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=750&h=375&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1080&h=540&q=100&fm=png&bg=transparent 1080w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1366&h=683&q=100&fm=png&bg=transparent 1366w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/52V4qOubMSc1tWR9KNIE7m/b0092a51f5d7124e2c6d802feca77e66/Recruiting_process_updated.png?w=1810&h=905&q=100&fm=png&bg=transparent 1810w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#383878",
          width: 1,
          height: 0.5
        }
      }
    },
    {
      contentful_id: "8pAG8X7914JkRpdUQnEtl",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Remote onboarding","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Feel welcome and well-informed from day one","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "7veeS48YXS7NpwxoPDwY1t",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"intive Academies","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A beginner in Tech? Start and grow your career with us","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#081818",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "1iqkFcGWwTC4JT75K0fHzY",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Less Stress!","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Learn more about our mental health program for employees","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    }
  ],
  slideDuration: 5,
  styleCarousel: "revolver-rect",
  indicators: {
    style: "dots",
    indicator1: {
      file: {
        contentType: "image/png",
        fileName: "dot-active.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#0868c8",
        width: 1,
        height: 1
      }
    },
    indicator2: {
      file: {
        contentType: "image/png",
        fileName: "dot.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#98a8b8",
        width: 1,
        height: 1
      }
    }
  },
  showTitle: false,
  showDescription: false
};

export const MediaCarouselParallel = args => TemplateWithCustomStyle(args, MediaCarouselComponent);

MediaCarouselParallel.storyName = "Parallel";

MediaCarouselParallel.args = {
  title: {
    raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","data":{},"content":[{"data":{},"marks":[],"value":"This is MediaCarousel Parallel component","nodeType":"text"}]}]}'
  },
  slides: [
    {
      contentful_id: "1iqkFcGWwTC4JT75K0fHzY",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Less Stress!","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Learn more about our mental health program for employees","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/5iWsAfXYOURJMUfxXCsgZk/a592d82845b6f87220fb785f5975ed74/5.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "7veeS48YXS7NpwxoPDwY1t",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"intive Academies","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"A beginner in Tech? Start and grow your career with us","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/7pcdEQxRBctkfs5EkNNC81/e97f91fa6d8546209bab74f304b15b1f/4_intive_Academies__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#081818",
          width: 1,
          height: 0.4833984375
        }
      }
    },
    {
      contentful_id: "8pAG8X7914JkRpdUQnEtl",
      title: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Remote onboarding","data":{},"marks":[]}]}]}'
      },
      description: {
        raw: '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Feel welcome and well-informed from day one","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
      },
      media: {
        file: {
          contentType: "image/png",
          url: "//images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png"
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=webp&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=webp&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=webp&bg=transparent 1024w",
                sizes: "100vw",
                type: "image/webp"
              }
            ],
            fallback: {
              src: "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent",
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=450&h=218&q=100&fm=png&bg=transparent 450w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=750&h=363&q=100&fm=png&bg=transparent 750w,\nhttps://images.ctfassets.net/ue4ib83wzj4v/30n5IhkxmPzWIkams83YJV/099c1cc7504ae2226b8ffc50445d289f/3_onboarding__1_.png?w=1024&h=495&q=100&fm=png&bg=transparent 1024w",
              sizes: "100vw"
            }
          },
          layout: "fullWidth",
          backgroundColor: "#080808",
          width: 1,
          height: 0.4833984375
        }
      }
    }
  ],
  slideDuration: 5,
  styleCarousel: "parallel",
  indicators: {
    style: "dots",
    indicator1: {
      file: {
        contentType: "image/png",
        fileName: "dot-active.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/4UrnRP3AEXsMbfpOa7BmjJ/532900e9daf123a6436ab5382ed6bfb4/dot-active.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#0868c8",
        width: 1,
        height: 1
      }
    },
    indicator2: {
      file: {
        contentType: "image/png",
        fileName: "dot.png",
        url: "//images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png",
        details: {
          image: {
            height: 12,
            width: 12
          }
        }
      },
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=webp&bg=transparent 12w",
              sizes: "100vw",
              type: "image/webp"
            }
          ],
          fallback: {
            src: "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent",
            srcSet:
              "https://images.ctfassets.net/ue4ib83wzj4v/6RYfcxwkIxYLP6gN3fIxgC/d542c2fdcfc6380a34475e9ce4bef949/dot.png?w=12&h=12&q=100&fm=png&bg=transparent 12w",
            sizes: "100vw"
          }
        },
        layout: "fullWidth",
        backgroundColor: "#98a8b8",
        width: 1,
        height: 1
      }
    }
  }
};
