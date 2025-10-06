import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MiniBio() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Willian Rodrigues Lima Silva</Text>
      <Image source={require('../assets/images/eu.jpg')} />

      <Text style={styles.info}>
        Estudante de Ciência da Computação e amo livros — principalmente a saga Duna.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },
  info: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    
  },
});
