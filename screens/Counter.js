import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Counter({ navigation }) {
  // Hook useState para cumplir con el requisito del examen [cite: 38]
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CONTADOR ACTUAL</Text>
      <Text style={styles.countText}>{count}</Text>

      <View style={styles.controls}>
        <TouchableOpacity 
          style={styles.circleBtn} 
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.btnLabel}>-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.circleBtn, { backgroundColor: '#FF007A' }]} 
          onPress={() => setCount(0)}
        >
          <Text style={styles.btnLabel}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.circleBtn} 
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnLabel}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.mainBtn} 
        onPress={() => navigation.navigate('ExampleEvent', { contador: count })}
      >
        <Text style={styles.mainBtnText}>ENVIAR VALOR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backLink}>VOLVER AL HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  label: { 
    color: '#00E5FF', 
    letterSpacing: 3, 
    marginBottom: 10 
  },
  countText: { 
    color: '#FFF', 
    fontSize: 120, 
    fontWeight: '100' 
  },
  controls: { 
    flexDirection: 'row', 
    gap: 20, 
    marginBottom: 40 
  },
  circleBtn: { 
    width: 70, 
    height: 70, 
    borderRadius: 35, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  btnLabel: { 
    color: '#FFF', 
    fontSize: 30 
  },
  mainBtn: { 
    backgroundColor: '#00E5FF', 
    paddingHorizontal: 40, 
    paddingVertical: 15, 
    borderRadius: 30 
  },
  mainBtnText: { 
    color: '#000', 
    fontWeight: 'bold' 
  },
  backLink: { 
    color: '#555', 
    marginTop: 30, 
    textDecorationLine: 'underline' 
  }
});