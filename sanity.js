import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
const client = sanityClient({
  projectId: 'omca6jzc',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
  token:
    'sk1OBkvBr4rHoM7EUQBhMkn7xaNs3k9Ar6CaPUk2Ahlzk4wj3eJ1QaeI6kBoklhkb58n2ZoZc0ka1Kd2MWLof011hKfmngC9TRYAdiJqKnA9r8X8gvyyNb4sNZGSdU2DBx0yUN4DYBwRBYtEJW4XAZnDxAJzEVpXCK10U52LtouTbJJNaUOe',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
