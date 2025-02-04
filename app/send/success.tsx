import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';

export const StyledView = styled(View);
export const StyledText = styled(Text);

export default function Send() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Success Message */}
      <View className="bg-green-50 mx-4 p-4 rounded-xl flex-row items-center">
        <Ionicons name="checkmark-circle" size={20} color="green" />
        <Text className="text-green-700 ml-2">
          Transaction Complete! - 01 Jan 2023 at 5:00 pm
        </Text>
      </View>

      {/* User Info */}
      <View className="items-center mt-6">
        <Image 
          source={require('../../assets/images/profile.png')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="text-lg font-semibold mt-3">Mehedi Hasan</Text>
        <Text className="text-gray-500">helloyouthmind@gmail.com</Text>
        <Text className="text-blue-500 mt-1">Coinpay Transaction ID: JD890KQ</Text>
      </View>

      {/* Account Info */}
      <View className="mx-4 mt-8">
        <Text className="text-lg font-semibold mb-4">Account</Text>
        <View className="flex-row items-center bg-gray-50 p-4 rounded-xl">
          <Image 
            source={require('../../assets/images/mastercard.png')}
            className="w-8 h-8"
          />
          <Text className="ml-3">Account ************3994</Text>
        </View>
      </View>

      {/* Buttons */}
      <View className="absolute bottom-8 left-4 right-4">
        <TouchableOpacity 
          className="bg-primary py-4 rounded-xl mb-4"
          onPress={() => router.push('/home')}
        >
          <Text className="text-white text-center font-semibold">Back to Homepage</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="border border-primary py-4 rounded-xl"
          onPress={() => router.push('/send')}
        >
          <Text className="text-primary text-center font-semibold">Make another Payment</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Text */}
      <Text className="text-gray-500 text-center text-sm mx-4 mb-4 absolute bottom-32">
        Thank you for using our app to send money. If you have any questions or concerns, please don't hesitate to{' '}
        <Text className="text-blue-500">contact us.</Text>
      </Text>
    </SafeAreaView>
  );
} 