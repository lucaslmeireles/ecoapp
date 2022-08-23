import { View } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
const LoadingScreen = () => {
  return (
    <View
      style={{ flex: 1 }}
      className="bg-[#348464] justify-center align-middle items-center"
    >
      <Animatable.Image
        source={require('../assets/flower-loader.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 max-w-full"
      />
      <Animatable.Text
        animation={'slideInUp'}
        className="text-white text-xl font-bold text-center"
      >
        Loading
      </Animatable.Text>
    </View>
  );
};

export default LoadingScreen;
