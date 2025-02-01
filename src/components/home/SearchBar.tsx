import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SearchBar = () => (
  <View style={styles.searchBar}>
    <Ionicons name="search-outline" size={20} color="#7B7B7B" />
    <Text style={styles.searchText}>Search "Payments"</Text>
  </View>
);

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
  },
  searchText: {
    color: '#7B7B7B',
    marginLeft: 10,
  },
}); 