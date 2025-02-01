import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TransactionItemProps {
  title: string;
  amount: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  textColor: string;
}

export const TransactionItem = ({ title, amount, icon, color, textColor }: TransactionItemProps) => (
  <TouchableOpacity style={styles.container}>
    <View style={[styles.icon, { backgroundColor: color }]}>
      <Ionicons name={icon} size={24} color="#4364F7" />
    </View>
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={[styles.amount, { color: textColor }]}>{amount}</Text>
    <Ionicons name="chevron-forward" size={24} color="#C4C4C4" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#1E1E1E',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
}); 