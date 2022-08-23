import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Commentcard from '../components/Commentcard';
import SendComment from '../components/SendComment';
import { useNavigation, useRoute } from '@react-navigation/native';
import client from '../sanity';
import GestureRecognizer from 'react-native-swipe-gestures';
import LoadingScreen from './LoadingScreen';
import { EvilIcons } from '@expo/vector-icons';

export default function CommentSrceen() {
  const [comments, setComments] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(true);
  const handleClose = () => navigation.goBack();
  const {
    params: { id },
  } = useRoute();
  React.useEffect(() => {
    client
      .fetch(
        `
        *[_type == "comment" && post._ref in *[_type=="post" && _id == $id]._id]{
            ...
          }
    `,
        { id },
      )
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((e) => e.message);
  }, []);

  return loading ? (
    <LoadingScreen />
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
            <Text className="font-semibold text-2xl">Comments</Text>
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
        <View className="z-50 mb-1 rounded-xl w-96 mx-1 h-10 border flex-row justify-between items-center border-gray-400 bg-gray-200">
          <SendComment id={id} />
        </View>
      </GestureRecognizer>
    </>
  );
}
