import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PinSetup() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleNumberPress = (number: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + number);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const keypadNumbers = [
    [{ num: '1', letters: '' }, { num: '2', letters: 'ABC' }, { num: '3', letters: 'DEF' }],
    [{ num: '4', letters: 'GHI' }, { num: '5', letters: 'JKL' }, { num: '6', letters: 'MNO' }],
    [{ num: '7', letters: 'PQRS' }, { num: '8', letters: 'TUV' }, { num: '9', letters: 'WXYZ' }],
    [{ num: '', letters: '' }, { num: '0', letters: '' }, { num: 'delete', letters: '' }],
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title and Subtitle */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Create passcode</Text>
        <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>
      </View>

      {/* PIN Dots */}
      <View style={styles.dotsContainer}>
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              pin.length > index && styles.dotFilled
            ]}
          />
        ))}
      </View>

      {/* Keypad */}
      <View style={styles.keypad}>
        {keypadNumbers.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={styles.key}
                onPress={() => item.num === 'delete' ? handleDelete() : handleNumberPress(item.num)}
                disabled={!item.num && item.num !== 'delete'}
              >
                {item.num === 'delete' ? (
                  <Ionicons name="backspace-outline" size={24} color="#000" />
                ) : (
                  <View style={styles.keyContent}>
                    <Text style={styles.keyNumber}>{item.num}</Text>
                    <Text style={styles.keyLetters}>{item.letters}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  dot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 8,
  },
  dotFilled: {
    backgroundColor: '#4364F7',
  },
  keypad: {
    paddingHorizontal: 20,
    marginTop: 'auto',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  key: {
    width: '30%',
    aspectRatio: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyContent: {
    alignItems: 'center',
  },
  keyNumber: {
    fontSize: 24,
    fontWeight: '500',
  },
  keyLetters: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
}); 