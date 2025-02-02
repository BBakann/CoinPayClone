import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const NAV_ITEMS = [
    { icon: 'home' as keyof typeof Ionicons.glyphMap, label: 'Home', path: '/home' as any, active: pathname === '/home' },
    { icon: 'time-outline' as keyof typeof Ionicons.glyphMap, label: 'History' },
    { icon: 'scan-outline' as keyof typeof Ionicons.glyphMap, label: '', isCenter: true, onPress: () => router.push('pin-setup' as any) },
    { icon: 'chatbubble-outline' as keyof typeof Ionicons.glyphMap, label: 'Chat' },
    { 
      icon: 'person-outline' as keyof typeof Ionicons.glyphMap, 
      label: 'Profile', 
      path: '/profile' as any,
      active: pathname === '/profile',
      onPress: () => {
        if (pathname !== '/profile') {
          router.push('/profile' as any);
        }
      }
    }
  ];

  return (
    <View className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex-row justify-between items-center px-5">
      {NAV_ITEMS.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          className={`items-center ${item.isCenter ? '-mt-5' : ''}`}
          onPress={item.onPress || (() => item.path && router.push(item.path))}
        >
          {item.isCenter ? (
            <View className="w-14 h-14 rounded-full bg-primary justify-center items-center">
              <Ionicons 
                name={item.icon} 
                size={24} 
                color="white" 
              />
            </View>
          ) : (
            <>
              <Ionicons 
                name={item.icon} 
                size={24} 
                color={item.active ? "#4364F7" : "#C4C4C4"} 
              />
              <Text className={`text-xs mt-1 ${item.active ? 'text-primary' : 'text-gray-400'}`}>
                {item.label}
              </Text>
            </>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}; 