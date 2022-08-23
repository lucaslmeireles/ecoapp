import * as React from 'react';
import { View, ScrollView, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TopPostHeader from '../components/TopPostHeader';
import TitleArea from '../components/TitleArea';
import TextArea from '../components/TextArea';
import PostFooter from '../components/PostFooter';
import LoadingScreen from './LoadingScreen';

export const PostDetail = () => {
  const {
    params: {
      id,
      category,
      title,
      imageUrl,
      text,
      authorName,
      authorImg,
      likes,
      published_at,
    },
  } = useRoute();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false);
  });

  return loading ? (
    <LoadingScreen />
  ) : (
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
              likes={likes}
              text={text}
            />
            {/* Text area */}
            <TextArea text={text} />
          </View>
          {/* Footer */}
          <PostFooter likes={likes} id={id} />
        </ScrollView>
      </View>
    </>
  );
};
