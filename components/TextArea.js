import { View, Text } from 'react-native'
import React from 'react'

export default function TextArea({text}) {
  return (
    <View className='justify-center items-center mt-3 mx-1'>
        <Text className='font-normal text-base text-gray-900 text-justify'>
        {text}
        </Text>
    </View>
)
}