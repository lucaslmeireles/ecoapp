import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { urlFor } from '../sanity'
import moment from 'moment'

export default function TitleArea({title, authorName, authorImg, published_at}) {
    const [saved, setSaved] = React.useState(false)
    const handleDate = () => {
        const dateFomart = Date()
    }
  return (
    <>
    <View className='pb-5 mt-6'>
    <Text className='text-2xl font-medium'>{title}</Text>
    </View>
    <View className='justify-between flex-row items-center mt-3 mb-3'>
    <View className='justify-start flex-row'>
        <Image
        source={{uri:'https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__480.jpg'}}
        className='rounded-full w-12 h-12 mr-2'
        />
        <View>
            <Text className='font-normal text-base text-gray-900'>{authorName}</Text>
            <Text className='font-light text-sm text-gray-500'>{moment(String(published_at, 'YYY-MM-DDTHH:MM:SSZ')).fromNow()}</Text>
        </View>
    </View>
    <View className='justify-start flex-row items-center'>
        <Pressable className='mx-2' onPress={() => setSaved(!saved)}>
            <Feather name={saved ? 'heart' : 'bookmark'} size={28} />
        </Pressable>
        <Pressable class='mx-2' >
            <Feather name='message-square' size={28}/>
        </Pressable>
    </View>
    </View>
    </>
)
}