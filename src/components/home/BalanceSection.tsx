import React from 'react';
import { View, Text } from 'react-native';

export const BalanceSection = () => {
  return (
    <View className="mx-5 my-5 p-5 bg-primary rounded-3xl">
      {/* Total Balance */}
      <Text className="text-white/80 mb-1">Total Balance</Text>
      <Text className="text-white text-3xl font-bold mb-5">$2,548.00</Text>
      
      {/* Income & Expenses */}
      <View className="flex-row justify-between">
        {/* Income */}
        <View>
          <Text className="text-white/80 mb-1">Income</Text>
          <Text className="text-white text-lg font-semibold">$1,840.00</Text>
        </View>
        
        {/* Expenses */}
        <View>
          <Text className="text-white/80 mb-1">Expenses</Text>
          <Text className="text-white text-lg font-semibold">$284.00</Text>
        </View>
      </View>
    </View>
  );
}; 