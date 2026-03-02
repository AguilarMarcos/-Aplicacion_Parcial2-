import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function MoviesFavScreen({ navigation }) {
  // Datos de ejemplo para las imágenes (puedes cambiarlas por tus favoritas)
  const movies = [
    { id: 1, title: 'Gran Turismo', url: 'https://imgs.search.brave.com/zPWKJVqIBcX-tVQY9sAzE5sg938QGsBdpacrah7NLUo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy83ZTY1ZWY0/ZGQ5YWZjYzkzNDlk/MjFjNDgwNDA4ODg0/NTc3Zjk2NzViYjk1/OWY0Y2FlN2FmODgy/NjlkZjhiNjhkLmpw/Zw' },
    { id: 2, title: 'Need For Speed', url: 'https://imgs.search.brave.com/eYao4CTsipHWT6w7UoC_4OnMnNf7S7yG6xhS6yvv588/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3AvdzMwMC94enVt/WE41MW12Mzk4MnI0/M3F4dk5ibUFyWlMu/anBn' },
    { id: 3, title: 'Riddick 3', url: 'https://imgs.search.brave.com/wUlziDecPepK6Er5m1RPxatqukwkxyetj-i4vezWNAo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvcmlkZGljay0y/MDEzLXBsYW5ldC5q/cGc_cT00OSZmaXQ9/Y3JvcCZ3PTIyMCZo/PTE4MiZkcHI9Mg' }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Cine Favorito</Text>
        <Text style={styles.description}>
          Una colección de las películas que han marcado mi pasión por el séptimo arte.
        </Text>
      </View>

      <View style={styles.gallery}>
        {movies.map((movie) => (
          <View key={movie.id} style={styles.card}>
            <Image source={{ uri: movie.url }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>VOLVER A SOBRE MÍ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20, alignItems: 'center' },
  header: { width: '100%', marginBottom: 30 },
  title: { color: '#00E5FF', fontSize: 28, fontWeight: 'bold', textAlign: 'left' },
  description: { color: '#AAA', fontSize: 14, marginTop: 10, lineHeight: 20 },
  gallery: { width: '100%', gap: 20 },
  card: { 
    width: '100%', 
    height: 200, 
    borderRadius: 20, 
    overflow: 'hidden', 
    backgroundColor: '#1E1E1E',
    elevation: 10,
    shadowColor: '#00E5FF',
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: { 
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    padding: 15, 
    backgroundColor: 'rgba(0,0,0,0.6)' 
  },
  movieTitle: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  backButton: { 
    marginTop: 40, 
    marginBottom: 20,
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 30, 
    borderWidth: 2, 
    borderColor: '#00E5FF' 
  },
  backButtonText: { color: '#00E5FF', fontWeight: 'bold', letterSpacing: 1.5 }
});