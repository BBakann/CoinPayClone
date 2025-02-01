import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const QUICK_ACTIONS = [
  { icon: 'send-outline' as keyof typeof Ionicons.glyphMap, label: 'Send', color: '#4364F7' },
  { icon: 'arrow-down-outline' as keyof typeof Ionicons.glyphMap, label: 'Request', color: '#FF8C00' },
  { icon: 'business-outline' as keyof typeof Ionicons.glyphMap, label: 'Bank', color: '#4CAF50' }
];

export const QuickActions = () => (
  <View style={styles.container}>
    {QUICK_ACTIONS.map((action, index) => (
      <TouchableOpacity key={index} style={styles.actionItem}>
        <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
          <Ionicons name={action.icon} size={24} color="white" />
        </View>
        <Text style={styles.actionText}>{action.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#333',
  },
}); 