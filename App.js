const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { HomePageNew } from './screens/HomePageNew';
import { PostNew } from './screens/PostNew';
import ProfilePage from './screens/ProfilePage';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoginScreen from './screens/LoginScreen';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <TailwindProvider>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  presentation: 'modal',
                  animationTypeForReplace: 'push',
                }}
              >
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
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                    presentation: 'modal',
                    animation: 'slide_from_bottom',
                    animationDuration: 1,
                  }}
                />
              </Stack.Navigator>
            </TailwindProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </View>
  );
};
export default App;
