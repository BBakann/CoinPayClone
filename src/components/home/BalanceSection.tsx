import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const BalanceSection = () => (
  <View style={styles.container}>
    <View style={styles.currencySelector}>
      <Ionicons name="flag-outline" size={20} color="white" />
      <Text style={styles.currencyText}>US Dollar</Text>
      <Ionicons name="chevron-down" size={20} color="white" />
    </View>
    <Text style={styles.balanceAmount}>$20,000</Text>
    <Text style={styles.balanceLabel}>Available Balance</Text>
    <TouchableOpacity style={styles.addMoneyButton}>
      <Ionicons name="wallet-outline" size={20} color="white" />
      <Text style={styles.addMoneyText}>Add Money</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyText: {
    color: 'white',
    marginHorizontal: 8,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  balanceLabel: {
    color: 'white',
    opacity: 0.8,
  },
  addMoneyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  addMoneyText: {
    color: 'white',
    marginLeft: 8,
  },
}); 