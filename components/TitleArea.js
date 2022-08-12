import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

export default function TitleArea({title, author, published_at}) {
    const [saved, setSaved] = React.useState(false)

  return (
    <>
    <View className='pb-5 mt-6'>
    <Text className='text-2xl font-medium'>{title}</Text>
    </View>
    <View className='justify-between flex-row items-center mt-3 mb-3'>
    <View className='justify-start flex-row'>
        <Image
        source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}
        className='rounded-full w-12 h-12 mr-2'
        />
        <View>
            <Text className='font-normal text-base text-gray-900'>{author}</Text>
            <Text className='font-light text-sm text-gray-500'>{published_at}</Text>
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