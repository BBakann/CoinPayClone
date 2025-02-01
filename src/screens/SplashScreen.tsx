import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0052D4', '#4364F7']}
        locations={[0, 1]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.logoSymbol}>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
          </View>
          <Text style={styles.logoText}>CoinPay</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
  },
  logoSymbol: {
    width: 120,
    height: 120,
    position: 'relative',
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
  },
  circle2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    opacity: 0.7,
  },
});

export default SplashScreen; 