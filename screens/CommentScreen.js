import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Commentcard from '../components/Commentcard';
import SendComment from '../components/SendComment';
import { useNavigation, useRoute } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { EvilIcons } from '@expo/vector-icons';
import fetchDataComment from '../data/fetchDataComment';
import { FadeLoading } from 'react-native-fade-loading';

export default function CommentScreen() {
  const navigation = useNavigation();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const handleClose = () => navigation.goBack();
  const {
    params: { id },
  } = useRoute();

  React.useEffect(() => {
    async function fetchData() {
      const data = await fetchDataComment(id);
      setComments(data);
      setTimeout(() => setLoading(false), 300);
    }
    fetchData();
  }, []);

  return loading ? (
    <>
      <View className="h-1 w-16 mt-11 justify-center algin-middle self-center bg-slate-700"></View>
      <ScrollView className="z-0">
        <View className="mt-7 mx-6 border-b border-b-slate-600 flex-row justify-between ">
          <Text className="font-semibold text-2xl">Comentários</Text>
          <Pressable
            onPress={handleClose}
            className="bg-gray-200 w-9 h-9 align-middle justify-center items-center mb-1 rounded-full"
          >
            <EvilIcons name="close" size={24} color="black" />
          </Pressable>
        </View>
        <View className="flex-row align-middle justify-start ">
          <FadeLoading
            primaryColor={'gray'}
            secondaryColor={'lightgray'}
            duration={5000}
            visible={true}
            className="mt-2 py-3 ml-8 mr-3 w-9 h-9 rounded-full"
          />
          <FadeLoading
            primaryColor={'gray'}
            secondaryColor={'lightgray'}
            duration={5000}
            visible={true}
            className="mt-2 py-3  w-[60%] h-3 "
          />
        </View>
        <FadeLoading
          primaryColor={'gray'}
          secondaryColor={'lightgray'}
          duration={0}
          visible={true}
          className="mt-2 py-3 mx-8"
        />
      </ScrollView>
    </>
  ) : (
    <>
      <StatusBar backgroundColor="rgb(243, 244, 246)"></StatusBar>
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeDown={() => navigation.goBack()}
      >
        <View className="h-1 w-16 mt-11 justify-center algin-middle self-center bg-slate-700"></View>
        <ScrollView className="z-0">
          <View className="mt-7 mx-6 border-b border-b-slate-600 flex-row justify-between ">
            <Text className="font-semibold text-2xl">Comentários</Text>
            <Pressable
              onPress={handleClose}
              className="bg-gray-200 w-9 h-9 align-middle justify-center items-center mb-1 rounded-full"
            >
              <EvilIcons name="close" size={24} color="black" />
            </Pressable>
          </View>
          {comments.map((comment) => {
            return (
              <Commentcard
                key={comment._id}
                name={comment.name}
                text={comment.content}
                image={comment.image}
                created_at={comment._createdAt}
              />
            );
          })}
        </ScrollView>
        {/* Talvez Trabalhar melhor aqui */}
        <View className="z-50 mb-1 rounded-xl w-96 mx-1 h-10 border flex-row justify-between items-center border-gray-400 bg-gray-200">
          <SendComment id={id} />
        </View>
      </GestureRecognizer>
    </>
  );
}
