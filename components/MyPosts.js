import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MyPosts = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="mx-5"
      onPress={() => navigation.navigate('MyPostScreen')}
    >
      <Image
        source={require('../assets/myposts.jpg')}
        className="h-32 w-[360px] rounded-2xl"
      />
      <Text className="absolute top-1 text-white text-base mx-3 my-2 font-medium">
        Quer contribuir para a nossa comunidade?
      </Text>
      <View className="absolute bottom-1 right-1 flex-row justify-center">
        <Text className=" text-white text-xl mx-3 my-2 font-bold">
          Saiba mais aqui
          <Feather name="arrow-right" size={24} color={'white'} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyPosts;
