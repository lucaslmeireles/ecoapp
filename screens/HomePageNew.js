import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient'

export const HomePageNew = () => {
    const navigation = useNavigation();

    return (
    <>
    <StatusBar backgroundColor="black"></StatusBar>
    <View style={{marginTop:40,}}>
        <View className='mt-2 ml-1 flex-row justify-between items-center'>
            <Text className='mt-3 text-3xl mx-3'>
                Explore
            </Text>
            <Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'}}
            className='w-7 h-7 mx-3'
            />
        </View>
        <View className='flex-row justify-around'>
            <Text className='text-xl pt-3 mx-3 mt-4'>
                Popular
                <View className='rounded-full bg-slate-800 w-2 h-2 r-1 align-middle'></View>
            </Text>
            
            <Text className='text-xl pt-3 mx-3 mt-4 text-gray-700'>
                Recent
            </Text>
            <Text className='text-xl pt-3 mx-3 mt-4 text-gray-700'>
                Recommend
            </Text>
        </View>
        <View className='mt-4 justify-center items-center'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity className='my-3 mx-5' onPress={() => navigation.navigate('PostDetail')}>
                    <Image 
                    source={{uri:'https://cdn.pixabay.com/photo/2020/11/04/19/22/old-windmill-5713337_960_720.jpg'}}
                    className='w-72 h-72 rounded-3xl '
                    />
                    <Text className='absolute top-4 mx-4 text-base text-white font-light'>Ecologia</Text>
                    <Text className='absolute top-8 mx-4 my-3 text-xl text-white font-medium'>Impactos ambientais do turismo</Text>

                </TouchableOpacity>
                <TouchableOpacity className='my-3 mx-5'>
                    <Image 
                    source={{uri:'https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052__340.jpg'}}
                    className='w-72 h-72 rounded-3xl'
                    />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.8)', 'transparent']}
                    />
                    <Text className='absolute top-4 mx-4 text-base text-black font-light'>Ecologia</Text>
                    <Text className='absolute top-8 mx-4 my-3 text-xl text-black font-medium'>Impactos ambientais do turismo</Text>

                </TouchableOpacity>
                <TouchableOpacity className='my-3 mx-5'>
                    <Image 
                    source={{uri:'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg'}}
                    className='w-72 h-72 rounded-3xl'
                    />
                    <Text className='absolute top-4 mx-4 text-base text-white font-light'>Ecologia</Text>
                    <Text className='absolute top-8 mx-4 my-3 text-xl text-white font-medium'>Impactos ambientais do turismo</Text>

                </TouchableOpacity>
            </ScrollView>
            <View></View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* #TODO Escurecer imagens, tirar o roxo do fim da scroll, 
                #TODO Sera que colocar Recommend embaixo fica legal??? */}
            <TouchableOpacity className='my-3 mx-5'>
                    <Image 
                    source={{uri:'https://cdn.pixabay.com/photo/2017/07/29/13/17/plant-2551467__340.jpg'}}
                    className='w-72 h-72 rounded-3xl'
                    />
                    <Text className='absolute top-4 mx-4 text-base text-white font-light'>Ecologia</Text>
                    <Text className='absolute top-8 mx-4 my-3 text-xl text-white font-medium'>Impactos ambientais do turismo</Text>

                </TouchableOpacity>
                <TouchableOpacity className='my-3 mx-5'>
                    <Image 
                    source={{uri:'https://cdn.pixabay.com/photo/2021/08/26/15/18/mountain-6576362__340.jpg'}}
                    className='w-72 h-72 rounded-3xl'
                    />
                    <Text className='absolute top-4 mx-4 text-base text-white font-light'>Ecologia</Text>
                    <Text className='absolute top-8 mx-4 my-3 text-xl text-white font-medium'>Impactos ambientais do turismo</Text>

                </TouchableOpacity>
                                <TouchableOpacity className='my-3 mx-5'>
                    <Image 
                    source={{uri:'https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289__340.jpg'}}
                    className='w-72 h-72 rounded-3xl'
                    />
                    <Text className='absolute top-4 mx-4 text-base text-black font-light'>Ecologia</Text>
                    <Text className='absolute top-8 mx-4 my-3 text-xl text-black font-medium'>Impactos ambientais do turismo</Text>

                </TouchableOpacity>
                <TouchableOpacity className='my-3 mx-5'>
                    <Image 
                    source={{uri:'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581__340.jpg'}}
                    className='w-72 h-72 rounded-3xl'
                    />
                    <Text className='absolute top-4 mx-4 text-base text-white font-light'>Ecologia</Text>
                    <Text className='absolute top-8 mx-4 my-3 text-xl text-white font-medium'>Impactos ambientais do turismo</Text>

                </TouchableOpacity>

            </ScrollView>

        </View>
    </View>
    </>
    )
}