import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';

const Commentcard = ({ name, text, image, created_at }) => {
  const handleDate = (date) => {
    return moment(String(date, 'YYY-MM-DDTHH:MM:SSZ')).fromNow();
  };

  return (
    <View className="mt-2 py-3 mx-8">
      <View className="flex-row align-middle mb-3 items-center space-x-3">
        <Image source={{ uri: `${image}` }} className="w-9 h-9 rounded-full" />
        <View>
          <Text className=" text-gray-800 font-medium text-sm">{name}</Text>

          <Text className="text-gray-600 font-light text-xs">
            {handleDate(created_at)}
          </Text>
        </View>
      </View>
      <Text className="text-base text-black ">{text}</Text>
    </View>
  );
};

export default Commentcard;
