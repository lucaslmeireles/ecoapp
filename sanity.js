import SanityClientConstructor from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const sanityClient = SanityClientConstructor({
    projectId:"omca6jzc",
    dataset:'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builder = ImageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)

export default sanityClient