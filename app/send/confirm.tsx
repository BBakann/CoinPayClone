import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmPayment() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Confirm Payment</Text>
        <View className="w-8" />
      </View>

      {/* Amount Display */}
      <View className="items-center mt-8">
        <Text className="text-gray-500">Sending</Text>
        <Text className="text-4xl font-bold mt-2">$150.00</Text>
      </View>

      {/* Recipient Info */}
      <View className="mx-4 mt-8">
        <Text className="text-gray-500 mb-3">To</Text>
        <View className="flex-row items-center bg-gray-50 p-4 rounded-xl">
          <Image 
            source={require('../../assets/images/profile.png')}
            className="w-12 h-12 rounded-full"
          />
          <View className="ml-3">
            <Text className="font-semibold">Sarah Johnson</Text>
            <Text className="text-gray-500 text-sm">sarah@example.com</Text>
          </View>
        </View>
      </View>

      {/* Payment Method */}
      <View className="mx-4 mt-6">
        <Text className="text-gray-500 mb-3">From</Text>
        <View className="flex-row items-center bg-gray-50 p-4 rounded-xl">
          <Image 
            source={require('../../assets/images/mastercard.png')}
            className="w-8 h-8"
          />
          <Text className="ml-3">Account ************3994</Text>
        </View>
      </View>

      {/* Transaction Details */}
      <View className="mx-4 mt-6">
        <Text className="text-gray-500 mb-3">Transaction Details</Text>
        <View className="bg-gray-50 p-4 rounded-xl">
          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-500">Amount</Text>
            <Text className="font-semibold">$150.00</Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-500">Fee</Text>
            <Text className="font-semibold">$0.00</Text>
          </View>
          <View className="h-[1px] bg-gray-200 my-3" />
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Total</Text>
            <Text className="font-semibold">$150.00</Text>
          </View>
        </View>
      </View>

      {/* Confirm Button */}
      <View className="absolute bottom-8 left-4 right-4">
        <TouchableOpacity 
          className="bg-primary py-4 rounded-xl"
          onPress={() => router.push('/send/success')}
        >
          <Text className="text-white text-center font-semibold">Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} 