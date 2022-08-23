import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';

export const UserProfile = () => {
  return (
    <>
      <StatusBar></StatusBar>
      <SafeAreaView>
        <Header></Header>

        <View>
          <View className="items-center">
            <Image
              className="mt-4 w-44 h-44 rounded-full"
              source={{
                uri: 'https://img.freepik.com/free-vector/tree-collection-flat-icon-with-nine-different-kind-plants-white-illustration_1284-44873.jpg?w=2000',
              }}
            />
            <Text className="mx-2 pt-5 text-center text-xl text-black">
              Lucas Lucio de Meireles
            </Text>
            <Text className="my-2 p-1 text-center text-base text-green-700">
              Clique Aqui
            </Text>
          </View>
          <View className="mx-3 bg-gray-100">
            <Text className="text-base pt-2 pb-2">Userame</Text>
            <TextInput
              className="text-base bg-gray-100 border border-b-gray-700 rounded-md"
              placeholder=" Usuario"
            ></TextInput>
            <Text className="text-base pt-2 pb-2">email</Text>
            <TextInput
              className="text-base bg-gray-100 border border-b-gray-700 rounded-md"
              placeholder=" email"
            ></TextInput>

            <Text className="text-base pt-2 pb-2">ome</Text>
            <TextInput
              className="text-base bg-gray-100 border border-b-gray-700 rounded-md"
              placeholder=" ome"
            ></TextInput>

            <Text className="text-base pt-2 pb-2">seha</Text>
            <TextInput
              className="text-base bg-gray-100 border border-b-green-700 rounded-md"
              placeholder=" seha"
            ></TextInput>
          </View>
          <View className="my-6 justify-end items-end justify-self-stretch">
            <TouchableOpacity className="mx-4 rounded-lg bg-green-700 h-9 justify-center px-3">
              <Text className="text-white">Fazer Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
