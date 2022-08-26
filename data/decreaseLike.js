import client from '../sanity';

export const decrease = async (id) => {
  try {
    await client.patch(id).dec({ likes: 1 }).commit();
    console.log('- 1 ');
  } catch (error) {
    console.log(error);
  }
};
