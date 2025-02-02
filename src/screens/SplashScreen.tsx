import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#0052D4', '#4364F7']}
        locations={[0, 1]}
        className="flex-1"
      >
        <View className="flex-1 justify-center items-center">
          <View className="relative w-[120px] h-[120px]">
            <View className="w-[100px] h-[100px] rounded-full bg-white absolute left-0" />
            <View className="w-[100px] h-[100px] rounded-full bg-white absolute right-0 opacity-70" />
          </View>
          <Text className="text-white text-[40px] font-bold mt-5">CoinPay</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen; 