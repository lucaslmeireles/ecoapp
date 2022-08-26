import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Linking,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const MyPostScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar></StatusBar>
      <View className="flex-1 h-screen bg-gray-200 relative">
        <View className="w-full h-36 z-0 relative">
          <Pressable
            className="z-10 absolute top-12 left-4"
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={29} color="white" />
          </Pressable>

          <Image
            source={require('../assets/myposts.jpg')}
            className="w-full h-48"
          />
        </View>
        <View className="w-full  bg-gray-200 z-20 rounded-t-[45px] items-start ">
          <Text className="text-2xl text-slate-900 mx-4 px-2 my-5 font-semibold ">
            Como contribuir para a comunidade?
          </Text>
          <Text className="mx-6 text-base text-slate-800 my-3 font-regular">
            Atualmente somos uma pequena rede e portanto para participar você
            precisa enviar um email para eco@socialmedia.com com suas
            informações e após a aprovação voce estará apto a acessar a nossa
            plataforma para a criação de posts. Porém temos planos de expandir
            essa função para todos os usuarios, caso você queira esperar não
            deixe de acompanhar os posts. Um abraço da equipe ECO.
          </Text>
        </View>
        <TouchableOpacity
          className="w-14 h-14 rounded-full items-center align-middle justify-center z-50 bg-gray-400 absolute bottom-6 right-4"
          onPress={() =>
            Linking.openURL(
              'mailto:eco@socialmedia.com?subject=Quero%20Participar&body=Escreva%20seus%20dados%20aqui!',
            )
          }
        >
          <Ionicons name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MyPostScreen;
