import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ExampleEvent({ route, navigation }) {
  // Extraemos los parámetros recibidos de Home y Counter
  const { nombre, contador } = route.params || {};

  const lanzarAlerta = () => {
    // Mostramos la alerta con los datos requeridos por el examen
    Alert.alert(
      "💻 SISTEMA",
      `Usuario: ${nombre || 'Desconocido'}\nValor Recibido: ${contador ?? 0}`,
      [{ text: "Entendido" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel de Datos</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardLabel}>USUARIO:</Text>
        <Text style={styles.cardValue}>{nombre || 'Marcos Aguilar'}</Text>
        
        <Text style={[styles.cardLabel, {marginTop: 20}]}>VALOR RECIBIDO:</Text>
        <Text style={[styles.cardValue, {color: '#FF007A'}]}>{contador ?? '0'}</Text>
      </View>

      <TouchableOpacity style={styles.alertBtn} onPress={lanzarAlerta}>
        <Text style={styles.alertBtnText}>LANZAR ALERTA</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeBtn}>REGRESAR A INICIO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 30, justifyContent: 'center' },
  title: { color: '#FFF', fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  card: { backgroundColor: '#1E1E1E', padding: 25, borderRadius: 20, borderStyle: 'dashed', borderWidth: 1, borderColor: '#444' },
  cardLabel: { color: '#555', fontWeight: 'bold', fontSize: 12 },
  cardValue: { color: '#00E5FF', fontSize: 22, fontWeight: 'bold' },
  alertBtn: { backgroundColor: '#FFF', padding: 20, borderRadius: 15, marginTop: 40, alignItems: 'center' },
  alertBtnText: { color: '#000', fontWeight: '900' },
  homeBtn: { color: '#00E5FF', textAlign: 'center', marginTop: 30, fontWeight: 'bold' }
});