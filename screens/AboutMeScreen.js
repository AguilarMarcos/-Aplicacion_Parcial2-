import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AboutMeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.glassCard}>
        <Text style={styles.title}>Sobre Mí</Text>
        <Text style={styles.description}>
          Estudiante de TI apasionado por el desarrollo de aplicaciones móviles y el diseño de interfaces modernas.
        </Text>
      </View>

      <TouchableOpacity 
        style={[styles.navBtn, { borderLeftColor: '#4CAF50' }]} 
        onPress={() => navigation.navigate('FoodFav')}
      >
        <Text style={styles.navText}>🍔 COMIDAS FAVORITAS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.navBtn, { borderLeftColor: '#E91E63' }]} 
        onPress={() => navigation.navigate('MoviesFav')}
      >
        <Text style={styles.navText}>🎬 PELÍCULAS FAVORITAS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backText}>VOLVER AL INICIO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 25, justifyContent: 'center' },
  glassCard: { backgroundColor: '#1E1E1E', padding: 20, borderRadius: 20, marginBottom: 30, borderLeftWidth: 4, borderLeftColor: '#7000FF' },
  title: { color: '#FFF', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { color: '#AAA', lineHeight: 22 },
  navBtn: { backgroundColor: '#1E1E1E', padding: 20, borderRadius: 15, marginBottom: 15, borderLeftWidth: 10, elevation: 5 },
  navText: { color: '#FFF', fontWeight: 'bold', letterSpacing: 1 },
  backBtn: { marginTop: 20, alignItems: 'center' },
  backText: { color: '#7000FF', fontWeight: 'bold', textDecorationLine: 'underline' }
});