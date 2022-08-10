import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient'
import sanityClient from "../sanity";
import TopBar from "../components/TopBar";
import FeaturedCategory from "../components/FeaturedCategory";

export const HomePageNew = () => {
    const navigation = useNavigation();
    const [featured, setFeatured] = React.useState([])

    return (
    <>
    <StatusBar backgroundColor="black"></StatusBar>
    <View style={{marginTop:40,}}>
        <TopBar/>
        <FeaturedCategory name={'Popular'}/>
        <FeaturedCategory name={'Recommend'}/>
    </View>
    </>
    )
}