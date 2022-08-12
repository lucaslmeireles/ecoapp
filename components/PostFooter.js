import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function PostFooter({likes}) {
  return (
    <View className='justify-evenly flex-row my-2 py-4'>
        <TouchableOpacity className='justify-center mx-4 items-center'>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25297.png'}}
            className='w-7 h-7'
            />
            <Text className='text-sm text-emerald-600'>{likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity className='justify-center mx-4  items-center'>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25297.png'}}
            className='w-7 h-7'
            />
            <Text className='text-sm text-rose-700'>25</Text>
        </TouchableOpacity>

</View>
)
}