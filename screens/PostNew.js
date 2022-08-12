import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Feather from "@expo/vector-icons/Feather"; 
import TopPostHeader from "../components/TopPostHeader";
import TitleArea from "../components/TitleArea";
import TextArea from "../components/TextArea";
import PostFooter from "../components/PostFooter";

export const PostNew = () => {
    const navigation = useNavigation();
    const { params:{
        id, 
        category, 
        title, 
        imageUrl, 
        text, 
        authorName, 
        authorImg, 
        like, 
        published_at
    }} = useRoute()

    return (
    <>
    <StatusBar backgroundColor="rgb(243, 244, 246)"></StatusBar>
    <View style={{flex:1}} className='bg-gray-100 '>
        <ScrollView >
            {/* Top Header */}
            <View className='mx-5 my-2 mt-10'>
                <TopPostHeader/>
                <TitleArea title={title} authorName={authorName} authorImg={authorImg} published_at={published_at}/>
            {/* Text area */}
                <TextArea text={text}/>
            </View>
            {/* Footer */}
            <PostFooter likes={like}/>
        </ScrollView>
    </View>
    </>
    )
}