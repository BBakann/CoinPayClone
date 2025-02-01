import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '../components/home/SearchBar';
import { BalanceSection } from '../components/home/BalanceSection';
import { QuickActions } from '../components/home/QuickActions';
import { TransactionList } from '../components/home/TransactionList';
import { BottomNav } from '../components/home/BottomNav';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4364F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
  },
});

export default HomePage; 