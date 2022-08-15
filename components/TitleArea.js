import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { urlFor } from '../sanity'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

export default function TitleArea({id, title, authorName, authorImg, published_at, imageUrl, category}) {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [saved, setSaved] = React.useState(false)

    const handleDate = (date) => {
        moment(String(date, 'YYY-MM-DDTHH:MM:SSZ')).fromNow() 
    }
    const addSavedPost = () =>{
        dispatch(addSavedPost({id, title, imageUrl, category}))
        setSaved(!saved)
    }
  return (
    <>
    <View className='pb-5 mt-6'>
    <Text className='text-2xl font-medium'>{title}</Text>
    </View>
    <View className='justify-between flex-row items-center mt-3 mb-3'>
    <View className='justify-start flex-row'>
        <Pressable className='flex-row'>
        <Image
        source={{uri:urlFor(authorImg).url()}}
        className='rounded-full w-12 h-12 mr-2'
        />
        <View>
            <Text className='font-normal text-base text-gray-900'>{authorName}</Text>
            <Text className='font-light text-sm text-gray-500'>{handleDate(published_at)}</Text>
        </View>
        </Pressable>
    </View>
    <View className='justify-start flex-row items-center'>
        <Pressable className='mx-2' onPress={addSavedPost}>
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