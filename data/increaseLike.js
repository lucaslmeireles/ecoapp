import client from '../sanity';

export const increase = async (id) => {
  try {
    await client.patch(id).inc({ likes: 1 }).commit();
    console.log('+ 1');
  } catch (error) {
    console.log(error);
  }
};
