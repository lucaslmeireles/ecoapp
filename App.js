const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import React , {useState, useEffect, useCallback}from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { HomePageNew } from "./screens/HomePageNew";
import { PostNew } from "./screens/PostNew";
import ProfilePage from "./screens/ProfilePage";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {

  return (
    <View style={{flex:1}}>
    <NavigationContainer>
    <Provider store={store}>
    <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false, presentation:'modal', animationTypeForReplace:'push'}}>
          <Stack.Screen
            name="HomePage"
            component={HomePageNew}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PostDetail"
            component={PostNew}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfilePage"
            component={ProfilePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        </TailwindProvider>
        </Provider>
    </NavigationContainer>
    </View>
  );
};
export default App;

