import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ProfileContent({name, bio}) {
  return (
    <View className=' mx-5 justify-center items-center mt-20 m-6'>
        <Image
                source={{uri: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}}
                className='w-44 h-44 mx-1 rounded-full'
        />
        <Text className='text-gray-900 text-xl pt-2'>
          name
        </Text>
        <Text className='text-gray-600 text-base'>
        bio
        </Text>

      </View>
  )
}