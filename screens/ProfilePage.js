import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import PostCard from '../components/PostCard'
import ProfileCard from '../components/ProfileCard'

export default function ProfilePage() {
  return (
    <>
    <StatusBar backgroundColor="black"></StatusBar>
    <View style={{marginTop:36}}>
    <View className=' my-2'>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View className=' mx-5 justify-between flex-row pt-3'>
        <Feather name='arrow-left' size={29}/>
        <Feather name='edit' size={24}/>
    </View>
    <View className=' mx-5 justify-center items-center mt-20 m-6'>
        <Image
                source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}
                className='w-44 h-44 mx-1 rounded-full'
        />
        <Text className='text-gray-900 text-xl pt-2'>
          Alissa Torres
        </Text>
        <Text className='text-gray-600 text-base'>
          Try to e etter
        </Text>

      </View>
      <View className='my-5'>
        <View className='my-2'>
        <Text className='text-2xl text-gray-900 mx-5'>
          Saved Posts
          <View></View>
        </Text>
      </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProfileCard></ProfileCard>
          <ProfileCard></ProfileCard>
          <ProfileCard></ProfileCard>
          <ProfileCard></ProfileCard>
          <ProfileCard></ProfileCard>
        </ScrollView>
        </View>
        <View className='my-5'>
        <View className='my-2'>
            <Text className='text-2xl text-gray-900 mx-5'>
            My  Posts
            </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProfileCard></ProfileCard>
          <ProfileCard></ProfileCard>
          <ProfileCard></ProfileCard>
          <ProfileCard></ProfileCard>
          <ProfileCard></ProfileCard>
        </ScrollView>
        </View>
    </ScrollView>
    </View>
    </View>
    </>
  )
}