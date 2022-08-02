const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./screens/HomePage";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import React , {useState, useEffect, useCallback}from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(()=>{
    async () =>{
      try{
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          Nunito_400Regular
        })
      }catch{}
      finally {
        setAppIsReady(true)
      }
    }
  },[])

  const onLayout = useCallback(() => {
    if(appIsReady){
      SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if(!appIsReady){
    return null
  }

  return (
    <View onLayout={onLayout} style={{flex:1}}>
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <SplashScreen />
      )}
    </NavigationContainer>
    </View>
  );
};
export default App;

