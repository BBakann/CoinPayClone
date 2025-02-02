import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '../components/home/SearchBar';
import { BalanceSection } from '../components/home/BalanceSection';
import { QuickActions } from '../components/home/QuickActions';
import { TransactionList } from '../components/home/TransactionList';
import { BottomNav } from '../components/home/BottomNav';

const HomePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['bottom']}>
      <View className="flex-row items-center justify-between px-5 pt-10 mb-5">
        <TouchableOpacity>
          <Ionicons name="trophy-outline" size={24} color="white" />
        </TouchableOpacity>
        <SearchBar />
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <BalanceSection />
      <QuickActions />
      <TransactionList />
      <BottomNav />
    </SafeAreaView>
  );
};

export default HomePage; 