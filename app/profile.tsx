import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { BottomNav } from '../src/components/home/BottomNav';

export default function Profile() {
  const router = useRouter();

  const menuItems = [
    { icon: 'person-outline', label: 'Personal Info', color: '#E8EFFF' },
    { icon: 'business-outline', label: 'Bank & Cards', color: '#FFF8E8' },
    { icon: 'card-outline', label: 'Transaction', color: '#FFE8EF' },
    { icon: 'settings-outline', label: 'Settings', color: '#E8EFFF' },
    { icon: 'shield-outline', label: 'Data Privacy', color: '#E8FFF1' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white pb-20">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">My Profile</Text>
        <View className="w-6" />
      </View>

      {/* Profile Card */}
      <View className="items-center p-5 mx-5 my-3 bg-white rounded-2xl shadow-sm">
        <View className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
          <Image
            source={require('../assets/images/profile.png')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity className="absolute -right-1 bottom-0 bg-white rounded-xl p-1 shadow-sm">
          <Ionicons name="pencil" size={20} color="#4364F7" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold mt-3">Mehedi Hasan</Text>
        <Text className="text-sm text-gray-500 mt-1">helloyouthmind@gmail.com</Text>
        <Text className="text-sm text-gray-500 mt-1">+8801995887406</Text>
      </View>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          className="flex-row items-center px-5 py-4 border-b border-gray-100"
        >
          <View 
            className="w-10 h-10 rounded-full justify-center items-center mr-4" 
            style={{backgroundColor: item.color}}
          >
            <Ionicons 
              name={item.icon as keyof typeof Ionicons.glyphMap} 
              size={24} 
              color="#4364F7" 
            />
          </View>
          <Text className="flex-1 text-base text-gray-900">{item.label}</Text>
          <Ionicons name="chevron-forward" size={24} color="#C4C4C4" />
        </TouchableOpacity>
      ))}

      {/* Bottom Navigation */}
      <BottomNav />
    </SafeAreaView>
  );
} 