import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PinSetup() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleNumberPress = (number: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + number);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const keypadNumbers = [
    [{ num: '1', letters: '' }, { num: '2', letters: 'ABC' }, { num: '3', letters: 'DEF' }],
    [{ num: '4', letters: 'GHI' }, { num: '5', letters: 'JKL' }, { num: '6', letters: 'MNO' }],
    [{ num: '7', letters: 'PQRS' }, { num: '8', letters: 'TUV' }, { num: '9', letters: 'WXYZ' }],
    [{ num: '', letters: '' }, { num: '0', letters: '' }, { num: 'delete', letters: '' }],
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <TouchableOpacity className="p-5" onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title and Subtitle */}
      <View className="px-5 mb-12">
        <Text className="text-2xl font-bold mb-2">Create passcode</Text>
        <Text className="text-gray-600">This info needs to be accurate with your ID document.</Text>
      </View>

      {/* PIN Dots */}
      <View className="flex-row justify-center mb-12">
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${
              pin.length > index ? 'bg-primary' : 'bg-gray-200'
            }`}
          />
        ))}
      </View>

      {/* Keypad */}
      <View className="px-5 mt-auto mb-5">
        {keypadNumbers.map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row justify-between mb-5">
            {row.map((item, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                className="w-[30%] aspect-[2/1] justify-center items-center"
                onPress={() => item.num === 'delete' ? handleDelete() : handleNumberPress(item.num)}
                disabled={!item.num && item.num !== 'delete'}
              >
                {item.num === 'delete' ? (
                  <Ionicons name="backspace-outline" size={24} color="#000" />
                ) : (
                  <View className="items-center">
                    <Text className="text-2xl font-medium">{item.num}</Text>
                    <Text className="text-xs text-gray-500 mt-0.5">{item.letters}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
} 