import { getMediaCarousel } from "@/lib/contentful/api";
import MediaCarousel from "./MediaCarousel";
import { draftMode } from "next/headers";



const MediaCarouselSSR = async ({sys:{id}}: any)=>{
    const {isEnabled} = draftMode();
    const data = await getMediaCarousel(id,isEnabled);
    return <MediaCarousel {...data} />
}

export default MediaCarouselSSR;