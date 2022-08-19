import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TopPostHeader from '../components/TopPostHeader';
import TitleArea from '../components/TitleArea';
import TextArea from '../components/TextArea';
import PostFooter from '../components/PostFooter';

export const PostNew = () => {
  const {
    params: {
      id,
      category,
      title,
      imageUrl,
      text,
      authorName,
      authorImg,
      like,
      published_at,
    },
  } = useRoute();

  return (
    <>
      <StatusBar backgroundColor="rgb(243, 244, 246)"></StatusBar>
      <View style={{ flex: 1 }} className="bg-gray-100 ">
        <ScrollView>
          {/* Top Header */}
          <View className="mx-5 my-2 mt-10">
            <TopPostHeader title={title} authorName={authorName} />
            <TitleArea
              id={id}
              imageUrl={imageUrl}
              category={category}
              title={title}
              authorName={authorName}
              authorImg={authorImg}
              published_at={published_at}
              likes={like}
              text={text}
            />
            {/* Text area */}
            <TextArea text={text} />
          </View>
          {/* Footer */}
          <PostFooter likes={like} />
        </ScrollView>
      </View>
    </>
  );
};
