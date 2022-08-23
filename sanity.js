import { PROJECT_ID, DATASET, API_VERSION, TOKEN_EDITOR } from '@env';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: true,
  apiVersion: API_VERSION,
  token: TOKEN_EDITOR,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
