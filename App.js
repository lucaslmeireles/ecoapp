const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { HomeScreen } from './screens/HomeScreen';
import { PostDetail } from './screens/PostScreen';
import CommentSrceen from './screens/CommentScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

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
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PostDetail"
                  component={PostDetail}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ProfilePage"
                  component={ProfileScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CommentScreen"
                  component={CommentSrceen}
                  options={{
                    headerShown: false,
                    presentation: 'containedModal',
                    animation: 'slide_from_bottom',
                  }}
                />
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                    presentation: 'fullScreenModal',
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
