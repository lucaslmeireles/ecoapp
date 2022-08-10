const sanityClient = require('@sanity/client')
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = sanityClient({
    projectId:"omca6jzc",
    dataset:'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client