import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import PostCard from '../components/PostCard'
import ProfileCard from '../components/ProfileCard'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import ProfileContent from '../components/ProfileContent'
import { useSelector } from 'react-redux'

export default function ProfilePage() {
  const navigation = useNavigation();
  const savedPosts = useSelector(state => state.savedPosts)

  return (
    <>
    <StatusBar backgroundColor="rgb(243, 244, 246)"></StatusBar>
    <View style={{flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Top Header Profile */}
    <View className=' mx-5 justify-between flex-row pt-3 mt-10'>
      <Pressable onPress={() => navigation.navigate('HomePage')}>
        <Feather name='arrow-left' size={29}/>
      </Pressable>
      <Feather name='edit' size={24}/>
    </View>
    {/* Profile Content */}
    <ProfileContent/>

    {/* Redux Logic */}
      <View className='my-5'>
        <View className='my-2'>
        <Text className='text-2xl text-gray-900 mx-5'>
          Saved Posts
        </Text>
      </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {savedPosts.length > 0  && savedPosts.map((post, i) => {
          console.log(post)
          return (
            <ProfileCard
            id={post.id}
            title={post.title}
            category={post.category}
            imageUrl={post.imageUrl}
            key={i}
            />
          )
          
          })}
        </ScrollView>
        </View>
        <View className='my-5'>

        <View className='my-2'>
            <Text className='text-2xl text-gray-900 mx-5'>
            My  Posts
            </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        </ScrollView>
        </View>
    </ScrollView>
    </View>
    </>
  )
}