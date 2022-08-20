import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { useSelector } from 'react-redux';

export default function ProfileCard({ id, imageUrl, category, title }) {
  const posts = useSelector((state) =>
    state.savedPosts.filter((post) => post.id === id),
  );
  const { text, authorName, authorImg, authorId, like, published_at } =
    posts[0];
  const navigation = useNavigation();
  return (
    <View className="flex-row">
      <TouchableOpacity
        className="my-1 mx-3"
        onPress={() =>
          navigation.navigate('PostDetail', {
            id,
            category,
            title,
            imageUrl,
            text,
            authorName,
            authorImg,
            authorId,
            like,
            published_at,
          })
        }
      >
        <Image
          source={{ uri: urlFor(imageUrl).url() }}
          className="w-52 h-52 rounded-3xl opacity-95"
        />
        {category.map((category) => {
          return (
            <Text
              key={id}
              className="absolute top-4 mx-4 text-sm text-white font-light"
            >
              {category.title}
            </Text>
          );
        })}
        <Text className="absolute top-8 mx-4 my-3 text-base text-white font-medium">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
