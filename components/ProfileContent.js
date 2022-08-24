import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { addBio } from '../redux/loginReducer';

export default function ProfileContent() {
  const dispatch = useDispatch();

  const onChangeBio = (value) => {
    dispatch(addBio(value));
  };

  const { user } = useSelector((state) => state.persistedReducer.user);

  return (
    <View className=" mx-5 justify-center items-center mt-20 m-6">
      <Image
        source={{ uri: `${user.userImage}` }}
        className="w-44 h-44 mx-1 rounded-full"
      />
      <Text className="text-gray-900 text-xl pt-2">{user.name}</Text>
      <View className="flex-row items-center justify-around mx-3 space-x-2">
        <TextInput
          className="text-gray-600 text-base"
          onEndEditing={(text) => onChangeBio(text)}
          value={user.bio || 'bio'}
        />
        <Pressable>
          <Feather name="edit" size={16} color="gray" />
        </Pressable>
      </View>
    </View>
  );
}
