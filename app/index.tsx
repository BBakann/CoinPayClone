import React, { useEffect } from 'react';
import { View, Image, Text, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(50);

  useEffect(() => {
    // Fade in ve slide up animasyonu
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    // Onboarding'e geçiş
    const timer = setTimeout(() => {
      router.push('/onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#0038FF', '#4364F7']}
        locations={[0, 1]}
        className="flex-1 justify-center items-center"
      >
        <Animated.View 
          style={{ 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }}
          className="items-center"
        >
          <Image 
            source={require('../assets/images/logo.png')} 
            className="w-[150px] h-[50px] mb-4"
            resizeMode="contain"
          />
          <Text className="text-black text-2xl font-bold">
            CoinPay
          </Text>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}