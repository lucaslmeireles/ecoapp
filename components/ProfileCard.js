import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { urlFor } from '../sanity';
import { useSelector } from 'react-redux';


export default function ProfileCard({id, imageUrl, category}) {
  // Sanity client com o id para mandar os dados na route do post details
  //map com os posts que estão no redux
  const navigation = useNavigation();
  return (
    <View className='flex-row'>
            <TouchableOpacity className='my-1 mx-3' onPress={() => navigation.navigate('PostDetail')}>
                <Image 
                source={{uri: 'https://images.unsplash.com/photo-1660586179082-775abddd8386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'}}
                className='w-52 h-52 rounded-3xl opacity-95'
                />
                <Text className='absolute top-4 mx-4 text-sm text-white font-light'>{category}</Text>
                <Text className='absolute top-8 mx-4 my-3 text-base text-white font-medium'>teste</Text>

            </TouchableOpacity>
    </View>
  )
}