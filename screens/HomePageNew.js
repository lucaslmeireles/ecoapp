import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient'
import sanityClient from "../sanity";
import TopBar from "../components/TopBar";
import FeaturedCategory from "../components/FeaturedCategory";

export const HomePageNew = () => {
    const idUnique = () =>{
        return String(Math.floor(Math.random() * 1000))
    }
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
    <ScrollView>
    {featuredCategories?.map((category)=> {
        return (<FeaturedCategory
        key={category._id + idUnique() }
        id={category._id}
        name={category.name}/>)
    })}   
    </ScrollView>
    </View>
    </>
    )
}