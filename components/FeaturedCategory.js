import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import PostCard from './PostCard'

export default function FeaturedCategory({id, name}) {
  return (
    <>
    <View className='flex-row justify-start ml-1'>
        <Text className='text-xl pt-3 mx-3  mt-4'>
            {name}
            <View className='rounded-full bg-slate-800 w-2 h-2 r-1 align-middle'></View>
        </Text>
    </View>
    <View className='mt-3'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PostCard/>
        </ScrollView>
        </View>
    </>
    )
}