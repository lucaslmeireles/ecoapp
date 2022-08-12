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
    const [featuredCategories, setFeaturedCategories] = React.useState([])
    React.useEffect(()=>{
        sanityClient
        .fetch(
          `
          *[_type == "featured"] {
            ...,
            posts[]->{
                ...
            }
          }
          `  
        )
        .then((data) => {
            setFeaturedCategories(data)
        })
        .catch((e)=> e.message)
    },[])
    return (
    <>
    <StatusBar backgroundColor="rgb(243, 244, 246)"></StatusBar>
    <View style={{flex:1}}>
        <TopBar/>
    {featuredCategories?.map((category)=> {
        return (<FeaturedCategory
        key={category._id}
        id={category._id}
        name={category.name}/>)
    })
    }   
    <FeaturedCategory></FeaturedCategory>
    </View>
    </>
    )
}