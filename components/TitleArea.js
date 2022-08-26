import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import {
  addPost,
  deletepost,
  toggleBookmark,
} from '../redux/savedPostsReducer';
import { handleDate } from '../utils/handleDate';

export default function TitleArea({
  id,
  title,
  authorName,
  authorImg,
  published_at,
  imageUrl,
  category,
  authorId,
  text,
  likes,
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const posts = useSelector((state) =>
    state.persistedReducer.savedPosts.filter((post) => post.id === id),
  );
  const { user } = useSelector((state) => state.persistedReducer.user);
  const post = posts[0] || { saved: false };
  const handleRemoveSave = () => {
    dispatch(toggleBookmark({ id: id, saved: !post.saved }));
    dispatch(deletepost({ id }));
  };

  const handleAddSave = () => {
    dispatch(
      addPost({
        id,
        title,
        imageUrl,
        category,
        authorName,
        authorImg,
        published_at,
        likes,
        text,
      }),
    );
    dispatch(toggleBookmark({ id: id, saved: !post.saved }));
  };
  return (
    <>
      <View className="pb-5 mt-6">
        <Text className="text-2xl font-medium">{title}</Text>
      </View>
      <View className="justify-between flex-row items-center mt-3 mb-3">
        <View className="justify-start flex-row">
          <Pressable className="flex-row">
            <Image
              source={{ uri: urlFor(authorImg).url() }}
              className="rounded-full w-12 h-12 mr-2"
            />
            <View>
              <Text className="font-normal text-base text-gray-900">
                {authorName}
              </Text>
              <Text className="font-light text-sm text-gray-500">
                {handleDate(published_at)}
              </Text>
            </View>
          </Pressable>
        </View>
        <View className="justify-start flex-row items-center">
          {post.saved ? (
            <Pressable className="mx-2" onPress={handleRemoveSave}>
              <Feather name={'heart'} size={28} />
            </Pressable>
          ) : (
            <Pressable className="mx-2" onPress={handleAddSave}>
              <Feather name={'bookmark'} size={28} />
            </Pressable>
          )}
          {/* Colocar condição para  */}
          <Pressable
            class="mx-2"
            onPress={() => {
              if (user?.authenticated || false) {
                navigation.navigate('CommentScreen', { id });
              } else {
                navigation.navigate('LoginScreen');
              }
            }}
          >
            <Feather name="message-square" size={28} />
          </Pressable>
        </View>
      </View>
    </>
  );
}
