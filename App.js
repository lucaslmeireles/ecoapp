const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./screens/HomePage";
import { Nunito_200ExtraLight,Nunito_400Regular } from "@expo-google-fonts/nunito";
import { Jura_600SemiBold } from "@expo-google-fonts/jura";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import React , {useState, useEffect, useCallback}from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { TaskDetail } from "./screens/TaskDetail";
import { UserProfile } from "./screens/UserProfile";
import { TailwindProvider } from "tailwindcss-react-native";
import { HomePageNew } from "./screens/HomePageNew";

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Nunito_400Regular, Jura_600SemiBold });
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;

  }  
  return (
    <View onLayout={onLayout} style={{flex:1}}>
    <NavigationContainer>
    <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="HomePage"
            component={HomePageNew}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TaskDetail"
            component={TaskDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
        </TailwindProvider>
    </NavigationContainer>
    </View>
  );
};
export default App;

