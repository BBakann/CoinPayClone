import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SearchBar = () => (
  <View className="flex-1 flex-row items-center bg-white/20 mx-4 px-4 py-2.5 rounded-3xl">
    <Ionicons name="search-outline" size={20} color="#7B7B7B" />
    <Text className="text-[#7B7B7B] ml-2.5">Search "Payments"</Text>
  </View>
); 