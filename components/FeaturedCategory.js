import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import PostCard from './PostCard'
import client, { urlFor } from '../sanity'

export default function FeaturedCategory({name, id}) {
    const [posts , setPosts] = React.useState([])
    console.log({id})
    React.useEffect(()=>{
        client.fetch(`
        *[_type == "featured" && _id == $id] {
            ...,
            posts[]->{
                ...,
            categories[]->{
                title
            }
            
            }
        }[0]
        `, {id})
        .then((data)=>{
            setPosts(data?.posts)
            
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
            console.log(post._id, post.title, post.categories[0].title)

            return (
                <PostCard
                id={post._id}
                title={post.title}
                key={post._id}
                category={post.categories}
                imageUrl={urlFor(post.coverImage)}
                text={post.text}
                like={post.like}
                author={post.map((auth) => auth.name)}
                />
            )
        })}
        </ScrollView>
        </View>
    </>
    )
}