import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Sabit kişi listesi
const RECENT_CONTACTS = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com' },
  { id: 2, name: 'John Smith', email: 'john@example.com' },
  { id: 3, name: 'Mike Wilson', email: 'mike@example.com' },
  { id: 4, name: 'Emma Davis', email: 'emma@example.com' },
  { id: 5, name: 'Alex Brown', email: 'alex@example.com' },
];

// Avatar komponenti
const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500'
  ];

  const randomColor = colors[name.length % colors.length];

  return (
    <View className={`w-12 h-12 rounded-full ${randomColor} justify-center items-center`}>
      <Text className="text-white text-lg font-bold">{initials}</Text>
    </View>
  );
};

export default function SelectRecipient() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(RECENT_CONTACTS);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = RECENT_CONTACTS.filter(
      contact => 
        contact.name.toLowerCase().includes(text.toLowerCase()) ||
        contact.email.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Select Recipient</Text>
        <View className="w-8" />
      </View>

      {/* Search Bar */}
      <View className="mx-4 mb-6">
        <View className="flex-row items-center bg-gray-100 px-4 py-3 rounded-xl">
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            className="ml-2 flex-1 text-base text-black"
            placeholder="Search name or email"
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Recent Contacts */}
      <View className="px-4 flex-1">
        <Text className="text-lg font-semibold mb-4">Recent</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredContacts.map((contact) => (
            <TouchableOpacity 
              key={contact.id}
              className="flex-row items-center py-3 border-b border-gray-100"
              onPress={() => router.push('/send/confirm')}
            >
              <Avatar name={contact.name} />
              <View className="ml-3">
                <Text className="font-semibold">{contact.name}</Text>
                <Text className="text-gray-500 text-sm">{contact.email}</Text>
              </View>
              <Ionicons 
                name="chevron-forward" 
                size={24} 
                color="#C4C4C4"
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Add New Recipient Button */}
      <TouchableOpacity 
        className="flex-row items-center mx-4 mt-6 mb-8 bg-gray-50 p-4 rounded-xl"
        onPress={() => router.push('/send/new-recipient')}
      >
        <View className="w-12 h-12 rounded-full bg-primary justify-center items-center">
          <Ionicons name="add" size={24} color="white" />
        </View>
        <Text className="ml-3 font-semibold">Add New Recipient</Text>
        <Ionicons 
          name="chevron-forward" 
          size={24} 
          color="#C4C4C4"
          style={{ marginLeft: 'auto' }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
} 