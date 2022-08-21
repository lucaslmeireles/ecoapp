import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike, toggleLiked } from '../redux/likedPosts';

export default function PostFooter({ id, likes }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) =>
    state.persistedReducer.like.filter((post) => post.id === id),
  );
  const post = posts[0] || { liked: false };
  const handleRemoveLike = () => {
    dispatch(toggleLiked({ id: id, liked: !post.liked }));
    dispatch(removeLike({ id }));
  };

  const handleAddLike = () => {
    dispatch(
      addLike({
        id,
      }),
    );
    dispatch(toggleLiked({ id: id, liked: !post.liked }));
  };

  return (
    <View className="justify-center mx-3 flex-row py-4">
      {post.liked ? (
        <TouchableOpacity
          className="justify-center mx-4 items-center"
          onPress={handleRemoveLike}
        >
          <Image
            source={require('../assets/clappingFull.png')}
            className="w-8 h-8"
          />
          <Text className="text-sm font-light text-gray-600">Curtido!!</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="justify-center mx-6 items-center py-3"
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
