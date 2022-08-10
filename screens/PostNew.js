import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Feather from "@expo/vector-icons/Feather"; 
import TopPostHeader from "../components/TopPostHeader";
import TitleArea from "../components/TitleArea";
import TextArea from "../components/TextArea";
import PostFooter from "../components/PostFooter";

export const PostNew = () => {
    const navigation = useNavigation();
    return (
    <>
    <StatusBar backgroundColor="black"></StatusBar>
    <View style={{marginTop:36}}>
        <ScrollView >
            {/* Top Header */}
            <View className='mx-5 my-2'>
                <TopPostHeader/>
                <TitleArea/>
            {/* Text area */}
                <TextArea/>
            </View>
            {/* Footer */}
            <PostFooter/>
        </ScrollView>
    </View>
    </>
    )
}