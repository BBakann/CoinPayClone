import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useContacts } from '../../src/context/ContactsContext';

export default function NewRecipient() {
  const router = useRouter();
  const { addContact } = useContacts();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isValid = name.length > 0 && email.includes('@');

  const handleSubmit = () => {
    if (isValid) {
      addContact(name, email);
      router.back(); // Recipient listesine geri dön
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Add New Recipient</Text>
        <View className="w-8" />
      </View>

      {/* Form */}
      <View className="px-4 mt-6">
        <View className="mb-4">
          <Text className="text-gray-500 mb-2">Full Name</Text>
          <TextInput
            className="bg-gray-50 p-4 rounded-xl text-base text-black"
            placeholder="Enter recipient's name"
            placeholderTextColor="#666"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View className="mb-4">
          <Text className="text-gray-500 mb-2">Email Address</Text>
          <TextInput
            className="bg-gray-50 p-4 rounded-xl text-base text-black"
            placeholder="Enter recipient's email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Continue Button */}
      <View className="absolute bottom-8 left-4 right-4">
        <TouchableOpacity 
          className={`py-4 rounded-xl ${isValid ? 'bg-primary' : 'bg-gray-300'}`}
          onPress={handleSubmit}
          disabled={!isValid}
        >
          <Text className="text-white text-center font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}