import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const QUICK_ACTIONS = [
  { icon: 'send-outline' as keyof typeof Ionicons.glyphMap, label: 'Send', color: '#4364F7' },
  { icon: 'arrow-down-outline' as keyof typeof Ionicons.glyphMap, label: 'Request', color: '#FF8C00' },
  { icon: 'business-outline' as keyof typeof Ionicons.glyphMap, label: 'Bank', color: '#4CAF50' }
];

export const QuickActions = () => (
  <View className="px-5">
    <Text className="text-lg font-semibold mb-3">Quick Actions</Text>
    <View className="flex-row justify-between">
      {QUICK_ACTIONS.map((action, index) => (
        <TouchableOpacity key={index} className="items-center">
          <View 
            className="w-12 h-12 rounded-full justify-center items-center mb-2"
            style={{ backgroundColor: action.color }}
          >
            <Ionicons 
              name={action.icon} 
              size={24} 
              color="white" 
            />
          </View>
          <Text className="text-sm text-gray-700">{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
); 