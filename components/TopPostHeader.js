import { View, Text } from 'react-native'
import React from 'react'
import Feather from "@expo/vector-icons/Feather"; 

export default function TopPostHeader() {
  return (
    <View className='justify-between flex-row pt-3'>
        <Feather name='arrow-left' size={29}/>
        <Feather name='share' size={24}/>
    </View>
)
}