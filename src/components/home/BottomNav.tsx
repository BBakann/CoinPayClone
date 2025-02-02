import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
    <View style={styles.container}>
      {NAV_ITEMS.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.navItem, item.isCenter && styles.centerButton]}
          onPress={item.onPress || (() => item.path && router.push(item.path))}
        >
          {item.isCenter ? (
            <View style={styles.scanButton}>
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
              <Text style={[
                styles.label,
                item.active && styles.activeLabel
              ]}>
                {item.label}
              </Text>
            </>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 80,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  centerButton: {
    marginTop: -20,
  },
  scanButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4364F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#C4C4C4',
    marginTop: 4,
  },
  activeLabel: {
    color: '#4364F7',
  },
}); 