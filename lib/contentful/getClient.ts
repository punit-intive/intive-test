import { createClient } from "contentful";

const contentfulClient =  createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    environment:"develop"
})

export default contentfulClient;