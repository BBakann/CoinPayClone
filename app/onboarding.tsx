import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

const slides = [
  {
    id: 1,
    image: require('../assets/images/onboarding1.png'),
    title: 'Trusted by millions of people, part of one part',
  },
  {
    id: 2,
    image: require('../assets/images/onboarding2.png'),
    title: 'Send money faster & safer to anyone',
  },
  {
    id: 3,
    image: require('../assets/images/onboarding3.png'),
    title: 'Manage all your money in one place',
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-5">
      <Image 
        source={slides[currentSlide].image} 
        className="w-4/5 h-[300px] mb-[50px]"
        resizeMode="contain"
      />
      
      {/* Dots Indicator */}
      <View className="flex-row mb-[30px]">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-[5px] ${
              index === currentSlide 
                ? "bg-primary w-5" 
                : "bg-gray-200"
            }`}
          />
        ))}
      </View>

      <Text className="text-[28px] font-bold text-center mb-[50px] text-gray-900 leading-9">
        {slides[currentSlide].title}
      </Text>

      <TouchableOpacity 
        className="bg-primary py-4 px-8 rounded-full w-full absolute bottom-[50px]"
        onPress={() => {
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          } else {
            router.push("/home");
          }
        }}
      >
        <Text className="text-white text-lg font-semibold text-center">
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
} 