import client from '../sanity';

export default async function fetchDataFeautredcategories(id) {
  try {
    const data = await client.fetch(
      `
        *[_type == "featured" && _id == $id] {
            ...,
            posts[]->{
                ...,
                categories[]->{
                    title
                },
                author->{
                  _id,
                  bio,
                  image,
                  name
                }
            }
        }[0]
        `,
      { id },
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
