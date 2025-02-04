import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SendAmount() {
  const router = useRouter();
  const [amount, setAmount] = useState('0');

  const handleNumberPress = (num: string) => {
    if (amount === '0') {
      setAmount(num);
    } else {
      setAmount(prev => prev + num);
    }
  };

  const handleDelete = () => {
    setAmount(prev => prev.slice(0, -1) || '0');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Send Money</Text>
        <View className="w-8" />
      </View>

      {/* Amount Display */}
      <View className="items-center justify-center my-12">
        <Text className="text-gray-500 mb-2">Enter Amount</Text>
        <View className="flex-row items-center">
          <Text className="text-4xl font-bold">$</Text>
          <Text className="text-4xl font-bold">{amount}</Text>
        </View>
      </View>

      {/* Keypad */}
      <View className="px-6 mt-auto mb-8">
        {[
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['.', '0', 'delete']
        ].map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row justify-between mb-4">
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                className="w-20 h-20 rounded-full justify-center items-center"
                onPress={() => key === 'delete' ? handleDelete() : handleNumberPress(key)}
              >
                {key === 'delete' ? (
                  <Ionicons name="backspace-outline" size={24} color="#000" />
                ) : (
                  <Text className="text-2xl">{key}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* Continue Button */}
        <TouchableOpacity 
          className="bg-primary py-4 rounded-xl mt-4"
          onPress={() => router.push('/send/recipient')}
        >
          <Text className="text-white text-center font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} 