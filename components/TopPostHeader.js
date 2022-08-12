import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Feather from "@expo/vector-icons/Feather"; 
import { useNavigation } from '@react-navigation/native';

export default function TopPostHeader() {
  const navigation = useNavigation();

  return (
    <View className='justify-between flex-row pt-3'>
      <Pressable onPress={()=> navigation.goBack()}>
        <Feather name='arrow-left' size={29}/>
      </Pressable>
        <Feather name='share' size={24}/>
    </View>
)
}