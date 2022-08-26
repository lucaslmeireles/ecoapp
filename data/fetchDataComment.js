import client from '../sanity';

export default async function fetchDataComment(id) {
  try {
    const data = await client.fetch(
      `
        *[_type == "comment" && post._ref in *[_type=="post" && _id == $id]._id]{
            ...
          }
    `,
      { id },
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
