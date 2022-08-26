import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import PostCard from './PostCard';
import fetchDataFeautredcategories from '../data/fetchDataFeauturedCategories';
import { FadeLoading } from 'react-native-fade-loading';

export default function FeaturedCategory({ id, name }) {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFeautredcategories(id);
      setPosts(data.posts);
      setTimeout(() => setLoading(false), 300);
    }
    fetchData();
  }, []);

  return loading ? (
    <>
      <View className="flex-row">
        <FadeLoading
          primaryColor="lightgray"
          secondaryColor="lightgray"
          duration={5000}
          visible={loading}
          className="w-64 h-64 my-14 mx-5 rounded-3xl"
        />
      </View>
    </>
  ) : (
    <>
      <View className="flex-row justify-start ml-1">
        <Text className="text-xl pt-3 mx-3 text-slate-900 mt-4">
          {name}
          <View className="rounded-full bg-slate-700 w-2 h-2 r-2 align-middle"></View>
        </Text>
      </View>
      <View className="mt-3">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {posts?.map((post) => {
            return (
              <PostCard
                id={post._id}
                title={post.title}
                key={post._id}
                category={post.categories}
                imageUrl={post.mainImage}
                text={post.text}
                likes={post.likes}
                authorName={post.author.name}
                authorImg={post.author.image}
                authorId={post.author._id}
                published_at={post.publishedAt}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
