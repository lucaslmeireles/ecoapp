import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ProfileCard from '../components/ProfileCard';
import { useNavigation } from '@react-navigation/native';
import ProfileContent from '../components/ProfileContent';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/loginReducer';
import MyPosts from '../components/MyPosts';

export default function ProfilePage() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const savedPosts = useSelector((state) => state.savedPosts);
  const handleSignOut = () => {
    dispatch(logoutUser());
    navigation.navigate('HomePage');
  };
  return (
    <>
      <StatusBar backgroundColor="rgb(243, 244, 246)"></StatusBar>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Top Header Profile */}
          <View className=" mx-5 justify-between flex-row pt-3 mt-10">
            <Pressable onPress={() => navigation.navigate('HomePage')}>
              <Feather name="arrow-left" size={29} />
            </Pressable>
            <Pressable onPress={handleSignOut}>
              <Feather name="log-out" size={24} />
            </Pressable>
          </View>
          {/* Profile Content */}
          <ProfileContent />

          {/* Redux Logic */}
          <View className="my-5">
            <View className="my-2">
              <Text className="text-2xl text-gray-900 mx-5">Saved Posts</Text>
            </View>
            {savedPosts.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {savedPosts.map((post, i) => {
                  return (
                    <ProfileCard
                      id={post.id}
                      title={post.title}
                      category={post.category}
                      imageUrl={post.imageUrl}
                      key={i}
                    />
                  );
                })}
              </ScrollView>
            ) : (
              <Text className="mx-5 text-lg text-black font-normal my-3">
                Voce não tem posts salvos ainda{' :('}
              </Text>
            )}
          </View>
          <View className="my-5">
            <View className="my-2">
              <Text className="text-2xl text-gray-900 mx-5">My Posts</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <MyPosts />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
