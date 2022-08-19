import { View, Text, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileContent() {
  const { user } = useSelector((state) => state.user);
  return (
    <View className=" mx-5 justify-center items-center mt-20 m-6">
      <Image
        source={{ uri: `${user.userImage}` }}
        className="w-44 h-44 mx-1 rounded-full"
      />
      <Text className="text-gray-900 text-xl pt-2">{user.name}</Text>
      <Text className="text-gray-600 text-base">bio</Text>
    </View>
  );
}
