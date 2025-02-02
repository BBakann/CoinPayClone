import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TransactionItem } from './TransactionItem';

const TRANSACTIONS = [
  { title: 'Spending', amount: '-$500', icon: 'card-outline' as keyof typeof Ionicons.glyphMap, color: '#E8EFFF', textColor: '#FF0000' },
  { title: 'Income', amount: '$3000', icon: 'trending-up-outline' as keyof typeof Ionicons.glyphMap, color: '#E8FFF1', textColor: '#00C853' },
  { title: 'Bills', amount: '-$800', icon: 'document-text-outline' as keyof typeof Ionicons.glyphMap, color: '#FFF8E8', textColor: '#FF0000' },
  { title: 'Savings', amount: '$1000', icon: 'wallet-outline' as keyof typeof Ionicons.glyphMap, color: '#FFF8E8', textColor: '#FF8C00' },
];

export const TransactionList = () => (
  <View className="flex-1 bg-white px-5">
    <View className="flex-row justify-between items-center my-4">
      <Text className="text-xl font-bold">Transaction</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      {TRANSACTIONS.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </ScrollView>
  </View>
); 