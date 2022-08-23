import { View, Text } from 'react-native';
import React from 'react';

export default function TextArea({ text }) {
  function blocksToText(blocks) {
    return blocks.map((block) =>
      block.children.map((child) => child.text).join(''),
    );
  }
  return (
    <View className="justify-center items-center mt-3 mx-1">
      <Text className="font-normal text-base text-gray-900 text-justify">
        {blocksToText(text)}
      </Text>
    </View>
  );
}
