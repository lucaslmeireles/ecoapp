import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { urlFor } from '../sanity';


export default function ProfileCard({id, title, imageUrl, category}) {
  // Sanity client com o id para mandar os dados na route do post details
  //map com os posts que estão no redux

  const navigation = useNavigation();
  return (
    <View className='flex-row'>
            <TouchableOpacity className='my-1 mx-3' onPress={() => navigation.navigate('PostDetail')}>
                <Image 
                source={{uri:urlFor(imageUrl).url()}}
                className='w-52 h-52 rounded-3xl opacity-95'
                />
                <Text className='absolute top-4 mx-4 text-sm text-white font-light'>{category}</Text>
                <Text className='absolute top-8 mx-4 my-3 text-base text-white font-medium'>{title}</Text>

            </TouchableOpacity>
    </View>
  )
}