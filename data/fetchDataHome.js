import client from '../sanity';

export default async function fetchDataHome() {
  try {
    const data = await client.fetch(
      `
          *[_type == "featured"] {
            ...,
            posts[]->{
                ...
            }
          }
          `,
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
