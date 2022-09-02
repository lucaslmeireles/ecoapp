import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike, toggleLiked } from '../redux/likedPostsReducer';
import { increase } from '../data/increaseLike';
import { decrease } from '../data/decreaseLike';

export default function PostFooter({ id, likes }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) =>
    state.persistedReducer.like.filter((post) => post.id === id),
  );
  const post = posts[0] || { liked: false };
  const handleRemoveLike = () => {
    decrease(id);
    dispatch(toggleLiked({ id: id, liked: !post.liked }));
    dispatch(removeLike({ id }));
  };

  const handleAddLike = () => {
    increase(id);
    dispatch(
      addLike({
        id,
        likes,
      }),
    );
    dispatch(toggleLiked({ id: id, liked: !post.liked }));
  };
  const handleLiked = (like) => {
    return Number(like);
  };

  return (
    <View className="justify-start mx-3 flex-row pb-8">
      {post.liked ? (
        <TouchableOpacity
          className="mx-4 flex-row items-center"
          onPress={handleRemoveLike}
        >
          <Image
            source={require('../assets/clappingFull.png')}
            className="w-9 h-9"
          />
          <Text className="text-sm font-light text-gray-600">
            {handleLiked(likes)} Palmas!!
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className=" mx-6 items-center"
          onPress={handleAddLike}
        >
          <Image
            source={require('../assets/clappingOutline.png')}
            className="w-9 h-9"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
