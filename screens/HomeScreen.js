import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const miNombre = "Aguilar Muñoz Marcos Uriel"; 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.name}>{miNombre}</Text>
        <Text style={styles.info}>Desarrollo de Apps Móviles</Text>
        <Text style={styles.tag}>5°A - TI</Text>
      </View>

      <TouchableOpacity 
        style={[styles.btn, { borderLeftColor: '#00E5FF' }]} 
        onPress={() => navigation.navigate('ExampleEvent', { nombre: miNombre })}
      >
        <Text style={styles.btnText}>EVENTOS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btn, { borderLeftColor: '#FF007A' }]} 
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.btnText}>CONTADOR</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btn, { borderLeftColor: '#7000FF' }]} 
        onPress={() => navigation.navigate('AboutMe')}
      >
        <Text style={styles.btnText}>SOBRE MÍ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center' },
  profileCard: { backgroundColor: '#1E1E1E', padding: 30, borderRadius: 25, marginBottom: 40, borderBottomWidth: 4, borderBottomColor: '#00E5FF' },
  name: { color: '#fff', fontSize: 28, fontWeight: '900', textAlign: 'center' },
  info: { color: '#AAA', fontSize: 14, textAlign: 'center', marginTop: 5 },
  tag: { color: '#00E5FF', fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  btn: { backgroundColor: '#1E1E1E', padding: 20, borderRadius: 15, marginBottom: 15, borderLeftWidth: 8, flexDirection: 'row', alignItems: 'center', elevation: 5 },
  btnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', letterSpacing: 2 }
});