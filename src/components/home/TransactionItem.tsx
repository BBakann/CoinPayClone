import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TransactionItemProps {
  title: string;
  amount: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  textColor: string;
}

export const TransactionItem = ({ title, amount, icon, color, textColor }: TransactionItemProps) => (
  <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
    <View className="w-[45px] h-[45px] rounded-[22.5px] justify-center items-center mr-4" style={{ backgroundColor: color }}>
      <Ionicons name={icon} size={24} color="#4364F7" />
    </View>
    <View className="flex-1">
      <Text className="text-base text-[#1E1E1E]">{title}</Text>
    </View>
    <Text className="text-base font-semibold mr-2.5" style={{ color: textColor }}>{amount}</Text>
    <Ionicons name="chevron-forward" size={24} color="#C4C4C4" />
  </TouchableOpacity>
); 