import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient'

export const PostNew = () => {
    const navigation = useNavigation();

    return (
    <>
    <StatusBar backgroundColor="black"></StatusBar>
    <View style={{marginTop:36,}}>
        <ScrollView >
            {/* Top Header */}
            <View className='mx-4 my-2'>
            <View className='pb-5 mt-6'>
                <Text className='text-2xl font-medium'>Ecologia a alma de um educador de hora</Text>
            </View>
            <View className='justify-start flex-row items-center mt-3'>
                <Image
                source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}
                className='rounded-full w-12 h-12 mr-2'
                />
                <View>
                    <Text className='font-normal text-base text-gray-900'>Alissa</Text>
                    <Text className='font-light text-sm text-gray-500'>3 days ago</Text>
                </View>
            </View>
            {/* Text area */}
            </View>
            <View className='justify-center items-center mt-3 mx-6'>
                <Text className='font-normal text-base text-gray-900 text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae blandit nibh. Donec vel efficitur turpis. Duis dui ante, cursus eget nisl at, maximus commodo arcu. Aliquam orci mi, volutpat non dui in, fermentum tincidunt mauris. Praesent tincidunt sem dignissim pretium vehicula. Vestibulum non blandit est, eu varius magna. Nam facilisis elementum risus pellentesque mattis. Duis risus erat, tincidunt at tincidunt sit amet, aliquet eu quam. Suspendisse at massa nec libero condimentum ultricies nec rhoncus lorem. Nunc leo ipsum, molestie nec leo nec, accumsan euismod nisl. Nullam vel nulla vel lorem dignissim aliquet et a felis. Nulla semper lacinia leo, sit amet scelerisque elit dapibus in.

                Morbi ut odio dolor. Vestibulum arcu augue, malesuada pharetra sapien id, rhoncus faucibus nibh. Etiam ac suscipit purus, vel tincidunt odio. Suspendisse ac mauris vel libero dictum vestibulum sit amet ut tortor. Donec ut enim tempus, iaculis purus nec, molestie mauris. Pellentesque quis fermentum ipsum, non eleifend leo. Cras lacus metus, dignissim eget turpis in, dictum auctor arcu. Proin lobortis libero vitae purus maximus rutrum vel et turpis.

                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eleifend at leo at ultrices. Duis et ante justo. Vivamus in risus sit amet dolor luctus efficitur at nec arcu. Vivamus ac ligula euismod, consectetur velit vitae, rhoncus enim. Morbi gravida id enim non accumsan. Curabitur lacinia feugiat augue in tristique.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae blandit nibh. Donec vel efficitur turpis. Duis dui ante, cursus eget nisl at, maximus commodo arcu. Aliquam orci mi, volutpat non dui in, fermentum tincidunt mauris. Praesent tincidunt sem dignissim pretium vehicula. Vestibulum non blandit est, eu varius magna. Nam facilisis elementum risus pellentesque mattis. Duis risus erat, tincidunt at tincidunt sit amet, aliquet eu quam. Suspendisse at massa nec libero condimentum ultricies nec rhoncus lorem. Nunc leo ipsum, molestie nec leo nec, accumsan euismod nisl. Nullam vel nulla vel lorem dignissim aliquet et a felis. Nulla semper lacinia leo, sit amet scelerisque elit dapibus in.

                Morbi ut odio dolor. Vestibulum arcu augue, malesuada pharetra sapien id, rhoncus faucibus nibh. Etiam ac suscipit purus, vel tincidunt odio. Suspendisse ac mauris vel libero dictum vestibulum sit amet ut tortor. Donec ut enim tempus, iaculis purus nec, molestie mauris. Pellentesque quis fermentum ipsum, non eleifend leo. Cras lacus metus, dignissim eget turpis in, dictum auctor arcu. Proin lobortis libero vitae purus maximus rutrum vel et turpis.

                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eleifend at leo at ultrices. Duis et ante justo. Vivamus in risus sit amet dolor luctus efficitur at nec arcu. Vivamus ac ligula euismod, consectetur velit vitae, rhoncus enim. Morbi gravida id enim non accumsan. Curabitur lacinia feugiat augue in tristique.
                </Text>
            </View>
            {/* Footer */}
            <View className='justify-evenly flex-row my-2 py-4'>
                <TouchableOpacity className='justify-center mx-4 items-center'>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25297.png'}}
                className='w-7 h-7'
                />
                <Text className='text-sm text-emerald-600'>909</Text>
                </TouchableOpacity>

                <TouchableOpacity className='justify-center mx-4  items-center'>
                <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25297.png'}}
                className='w-7 h-7'
                />
                <Text className='text-sm text-rose-700'>25</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    </View>
    </>
    )
}