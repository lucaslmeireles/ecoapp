import { View, Text, Image,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function TopBar() {
    const navigation = useNavigation();

  return (
    <View className='mt-11 ml-1 flex-row justify-between items-center'>
        <View className='justify-start flex-row items-center mt-3 mx-2'>
            <Pressable onPress={() => navigation.navigate('ProfilePage')}>
                <Image
                source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}
                className='w-9 h-9 mx-1 rounded-full'
                />
            </Pressable>
        <Text className=' text-2xl mx-1'>
            Explore
        </Text>
    </View>
        <Image
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'}}
        className='w-7 h-7 mx-3'
        />
    </View>
)
}