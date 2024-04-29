
import "./BrandCarousel.scss";

import GCLayerMain from "../GCLayerMain";
import GCTitleAndDesc from "../GCTitleAndDesc";
import MediaViewer from "../MediaViewer";
import PageContent from "../PageContent";
import StyledLogos from "./BrandCarousel.styled";
import { getBrandCarousel, getGenericPage } from "@/lib/contentful/api";
import { draftMode } from "next/headers";
 
const BrandCarousel = async ({ sys:{id} }) => {
  const { isEnabled } = draftMode();
  const brandCarouselData = await  getBrandCarousel(id,isEnabled);
  const { title, description, logos:{items:logos}, timeToChange, customStyle } =brandCarouselData;
  return (<GCLayerMain customStyle={customStyle} className='brandCarousel'>
    <PageContent marginBottom marginTop>
      <GCTitleAndDesc title={title} desc={description} showTitle={customStyle?.showTitle} showDescription={customStyle?.showDescription} />
    </PageContent>

    <StyledLogos logosLength={logos.length} timeToChange={timeToChange} className='brand-carousel-slider'>
      <div className='brand-carousel-slider__track'>
        {logos.map(logo => (
          <div className='brand-carousel-slider__slide' key={`${logo.contentful_id}-1`}>
            <MediaViewer media={logo.media} mediaLoading='lazy' />
          </div>
        ))}

        {logos.map(logo => (
          <div className='brand-carousel-slider__slide' key={`${logo.contentful_id}-2`}>
            <MediaViewer media={logo.media} mediaLoading='lazy' />
          </div>
        ))}
      </div>
    </StyledLogos>
  </GCLayerMain>
)};



export default BrandCarousel;
