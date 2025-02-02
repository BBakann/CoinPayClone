import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <Image 
        source={slides[currentSlide].image} 
        style={styles.image}
        resizeMode="contain"
      />
      
      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentSlide && styles.activeDot
            ]}
          />
        ))}
      </View>

      <Text style={styles.title}>{slides[currentSlide].title}</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          } else {
            router.push("/home");
          }
        }}
      >
        <Text style={styles.buttonText}>
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '80%',
    height: 300,
    marginBottom: 50,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4364F7',
    width: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    color: '#1E1E1E',
    lineHeight: 36,
  },
  button: {
    backgroundColor: '#4364F7',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '100%',
    position: 'absolute',
    bottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 