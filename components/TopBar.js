import { View, Text, Image,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function TopBar() {
    const navigation = useNavigation();

  return (
    <View className='mt-14 ml-1 flex-row justify-between mx-3 items-center'>
        <Text className=' text-2xl mx-1'>
            Explore
        </Text>
        <Pressable onPress={() => navigation.navigate('ProfilePage')}>
            <Image
                source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}
                className='w-10 h-10 mx-1 rounded-full'
                />
        </Pressable>
    </View>
)
}