import { View, Text, Pressable, Share } from 'react-native'
import React from 'react'
import Feather from "@expo/vector-icons/Feather"; 
import { useNavigation } from '@react-navigation/native';

export default function TopPostHeader({title, authorName}) {
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `Chek this out! ${title} of ${authorName} url`,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View className='justify-between flex-row pt-3'>
      <Pressable onPress={()=> navigation.goBack()}>
        <Feather name='arrow-left' size={29}/>
      </Pressable>
      <Pressable onPress={onShare}>
        <Feather name='share' size={24}/>
        </Pressable>
    </View>
)
}