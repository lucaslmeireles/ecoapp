import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


export default function PostCard({id, category, title, imageUrl, text, author, like, published_at}) {
    const navigation = useNavigation();
  return (
    <View className='flex-row'>
            <TouchableOpacity className='my-3 mx-5' onPress={() => navigation.navigate('PostDetail',{
              id, 
              category, 
              title, 
              imageUrl, 
              text, 
              author, 
              like, 
              published_at})}>
                <Image 
                source={{uri:'https://cdn.pixabay.com/photo/2020/11/04/19/22/old-windmill-5713337_960_720.jpg'}}
                className='w-64 h-64 rounded-3xl opacity-95'
                />
                {category.map((category) => {
                return (
                
                <Text key={id} className='absolute top-4 mx-4 text-base text-white font-light'>{category.title}</Text>
                )
              })}
                <Text className='absolute top-8 mx-4 my-3 text-xl text-white font-medium'>{title}</Text>
            </TouchableOpacity>
    </View>
  )
}