import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import PostCard from './PostCard'
import client, { urlFor } from '../sanity'

export default function FeaturedCategory({id, name}) {
    const [posts , setPosts] = React.useState([])
    React.useEffect(()=>{
        client.fetch(`
        *[_type == "featured" && _id == $id] {
            ...,
            posts[]->{
                ...,
                categories[]->{
                    title
                },
                author->{
                  _id,
                  bio,
                  image,
                  name
                }
            }
        }[0]
        `, {id})
        .then((data)=>{
            setPosts(data?.posts)
            console.log(posts)
        }
        )
    },[])      
  return (
    <>
    <View className='flex-row justify-start ml-1'>
        <Text className='text-xl pt-3 mx-3 text-slate-900 mt-4'>
            {name}
            <View className='rounded-full bg-slate-800 w-2 h-2 r-1 align-middle'></View>
        </Text>
    </View>
    <View className='mt-3'>
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
                authorId = {post.author._id}
                published_at={post.publishedAt}
                />
            )
        })}
        </ScrollView>
        </View>
    </>
    )
}