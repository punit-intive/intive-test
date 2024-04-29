import { TemplateWithCustomStyle } from "../../../../.storybook/templates";
import BrandCarouselComponent from "./BrandCarousel";

export default {
  title: "Components/Galleries/BrandCarousel",
  component: BrandCarouselComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      inlineStories: true
    }
  },
  args: {
    title: {
      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"heading-2","data":{},"content":[{"data":{},"marks":[],"value":"This is BrandCarousel component","nodeType":"text"}]}]}'
    },
    description: {
      raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","marks":[],"data":{}},{"nodeType":"text","value":"Aliquam faucibus orci","marks":[{"type":"bold"}],"data":{}},{"nodeType":"text","value":" non felis ","marks":[],"data":{}},{"nodeType":"text","value":"tristique","marks":[{"type":"italic"}],"data":{}},{"nodeType":"text","value":" imperdiet. ","marks":[],"data":{}},{"nodeType":"text","value":"Praesent hendrerit","marks":[{"type":"underline"}],"data":{}},{"nodeType":"text","value":" augue sed fringilla dictum.","marks":[],"data":{}}]}]}'
    },
    timeToChange: 50,
    logos: [
      {
        contentful_id: "sw2d5l9Yrhqk0G8SWG4TY",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/XvKq8VfA8icFJBTC8x8Xh/30a67082cf2e0f4cfbf580431e6642c5/Audi.svg.svg"
          }
        }
      },
      {
        contentful_id: "4EZXI6LfkZo1ASElnCHDuS",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/6L20Kvu559rvmyCpI5H1xX/ecf65d8a034e4db8148fc06fcb3ae17d/BASF.svg.svg"
          }
        }
      },
      {
        contentful_id: "6pRcwrNyEmwAvXV5bFc2hU",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/1NofScaX0iNGlnQbe6F69b/1d9ce77494dc97e4d520211f1d75bf47/blackberry.svg.svg"
          }
        }
      },
      {
        contentful_id: "484jgb8j2Iq7DD4OlIPyY8",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/3T9miqKF6DLUMtW6Rh0v6f/f7a6a06054d781ec0143a0cb57c1611b/bmw.svg"
          }
        }
      },
      {
        contentful_id: "5CMXwDEnlOmBT1nPpnOuUa",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/4HThlbY9F5Ka526hQT56Sp/0255f6ea69ea9971a9ef7981ca098676/deichmann.svg"
          }
        }
      },
      {
        contentful_id: "7yQeDUJndiMAzc38ESd8ob",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/7xq3AbUwDX95w9DxPBsSMo/a07906e0e0058ccb2106fe05541fd705/facebook.svg"
          }
        }
      },
      {
        contentful_id: "4LaaKXVA8C5oqx58GIwWH",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/5xwBVHAQMbpXXnG1CsWpr8/eac26cb72bae8c98548266ce357adcfa/intersport.svg"
          }
        }
      },
      {
        contentful_id: "5Vhl48IPkfHQfF9pEvd7vu",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/6BxL5s550nW4eYsWG6a2dd/74ee55d9c48cfc20181374752990830f/kaplan.svg"
          }
        }
      },
      {
        contentful_id: "2T0hiyGpbieIy6VSzBuw8K",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/ZudNBBhBjrZ0CxUBVXLzH/a86d267d5dca8d1e06e1ff2a24b04d41/mosaic.svg"
          }
        }
      },
      {
        contentful_id: "42qAowrDgYMrZbcYh3dJLU",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/4WDLgVx85cpn9LxS1Jgvew/53f54578ca95eb2535855eeb859a99a9/netzsch.svg"
          }
        }
      },
      {
        contentful_id: "qliwUuOO0e0DOyRKxCU5U",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/3CL33KZHeGzIE6XSULeZNc/9fc9cbf0fdc307a4fcad80955d03aad2/nubi.svg"
          }
        }
      },
      {
        contentful_id: "1YM47uyoSth3XBaLgJ5HMp",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/1WNMtH4Wvshspj9Y8eKB5d/39233a992c64c2738b45b0f4b7bb63d6/paramount.svg"
          }
        }
      },
      {
        contentful_id: "747cECIKHoIn4yG942Rzjf",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/5czIpT85hZC4Gq2zuogjvj/abb753ddeb088fb751574a7076ce55c5/qiagen.svg"
          }
        }
      },
      {
        contentful_id: "RihzAFZ3FLfqCEACVN583",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/7duAiwWmHsZew7RGSymKsn/b464c907bf3fde853321fea14c62f3bb/tandem.svg"
          }
        }
      },
      {
        contentful_id: "2efgicdVMueYDHzFD6Hlf2",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/3DH5Pm0R60dqFntjUvV7RB/991b4b72a01bd15ee5436823ccb55126/Tmobile.svg"
          }
        }
      },
      {
        contentful_id: "3feFHUWu1VcVnoYCkBaJ8Z",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/4WOUX0z85Xf8PI80V2qDUR/979009b9e528c55b25ee01311133402e/volkswagen.svg"
          }
        }
      },
      {
        contentful_id: "2VbG7fISGU9afXARPdAkkx",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/4xDZxM1hnZzUnGHeeijXHN/c1aac6dfc06afbdddde11f3759b64b22/vorwerk.svg"
          }
        }
      },
      {
        contentful_id: "5FG0kpilm3w8YJJfzsHElq",
        media: {
          file: {
            contentType: "image/svg+xml",
            url: "//images.ctfassets.net/ue4ib83wzj4v/4HKp3ASqux2eDYcvy3V8IB/6861692d3bc2e30eca3d3665660d7d22/weather_group.svg"
          }
        }
      }
    ]
  },
  argTypes: {
    title: {
      description: "Title of the component"
    },
    description: {
      description: "Description of the component"
    },
    timeToChange: {
      control: { type: "number" },
      description: "Set speed of carousel"
    },
    logos: {
      description: "Logos to be rendered within carousel"
    }
  }
};

export const BrandCarousel = args => TemplateWithCustomStyle(args, BrandCarouselComponent);

BrandCarousel.storyName = "BrandCarousel";
