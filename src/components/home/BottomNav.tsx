import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NAV_ITEMS = [
  { icon: 'home' as keyof typeof Ionicons.glyphMap, label: 'Home', active: true },
  { icon: 'time-outline' as keyof typeof Ionicons.glyphMap, label: 'History' },
  { icon: 'scan-outline' as keyof typeof Ionicons.glyphMap, label: '', isCenter: true },
  { icon: 'chatbubble-outline' as keyof typeof Ionicons.glyphMap, label: 'Chat' },
  { icon: 'person-outline' as keyof typeof Ionicons.glyphMap, label: 'Profile' }
];

export const BottomNav = () => (
  <View style={styles.container}>
    {NAV_ITEMS.map((item, index) => (
      <TouchableOpacity 
        key={index} 
        style={[styles.navItem, item.isCenter && styles.centerNav]}
      >
        {item.isCenter ? (
          <View style={styles.centerNavButton}>
            <Ionicons name={item.icon} size={24} color="white" />
          </View>
        ) : (
          <>
            <Ionicons 
              name={item.icon} 
              size={24} 
              color={item.active ? "#4364F7" : "#C4C4C4"} 
            />
            <Text style={[styles.navText, item.active && styles.activeText]}>
              {item.label}
            </Text>
          </>
        )}
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: Platform.OS === 'ios' ? 25 : 15,
    paddingTop: 15,
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
  navText: {
    fontSize: 12,
    color: '#C4C4C4',
    marginTop: 4,
  },
  centerNav: {
    marginTop: -30,
  },
  centerNavButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4364F7',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4364F7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  activeText: {
    color: '#4364F7',
  },
}); 