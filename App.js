const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import React , {useState, useEffect, useCallback}from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { HomePageNew } from "./screens/HomePageNew";
import { PostNew } from "./screens/PostNew";
import ProfilePage from "./screens/ProfilePage";
import store from "./store";
import { Provider } from "react-redux";
import LoginScreen from "./screens/LoginScreen";
import useAuth, { AuthProvider } from "./hooks/useAuth";
const App = () => {
  return (

    <View style={{flex:1}}>
    <Provider store={store}>
    <NavigationContainer>
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
    </NavigationContainer>
    </Provider>
    </View>
  );
};
export default App;

