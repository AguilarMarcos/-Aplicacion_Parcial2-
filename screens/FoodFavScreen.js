import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function FoodFavScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Texto descriptivo requerido [cite: 61] */}
      <Text style={styles.desc}>Mis platillos favoritos y delicias gastronómicas:</Text>
      
      <View style={styles.gallery}>
        {/* Al menos 3 imágenes correspondientes a tus comidas [cite: 62, 63] */}
        <Image 
          source={{ uri: 'https://imgs.search.brave.com/h_Ov7_xh7H5bD0_rI3A6z0CrjZM2TCwbsMXCmaVdUBc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb2Np/bmFtaWEuY29tLm14/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA1L01lc2EtZGUt/dHJhYmFqby01LWNv/cGlhLTItMTAwLTEx/MDB4NTAwLmpwZw' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://imgs.search.brave.com/Ruvix-uZBIMDgDWSXykga4UU-misUSO_xs_hVp-PC3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDMvZjkvM2MvZmEv/YWF5LWNoYWJlbGEu/anBn' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://imgs.search.brave.com/IlthKk08s7cEfMZvY_uvDVcuLbbNAKxl3VA7NKprMQI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDc4NDQ4L3Bob3Rv/L3N1c2hpLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz12WlhD/RUMtUU9mb2ZFck9v/NUhOZ0J0Nk1XVTBp/dGZTeUlSaW56MXRR/Zm5ZPQ' }} 
          style={styles.image} 
        />
      </View>

      {/* Botón para volver a AboutMeScreen [cite: 64] */}
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
        <Text style={styles.btnBackText}>VOLVER A SOBRE MÍ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    padding: 20 
  },
  desc: { 
    color: '#AAA', 
    marginBottom: 20, 
    fontSize: 16,
    textAlign: 'center'
  },
  gallery: { 
    gap: 15 
  },
  image: { 
    width: '100%', 
    height: 200, 
    borderRadius: 20, 
    backgroundColor: '#333',
    marginBottom: 5
  },
  btnBack: { 
    marginVertical: 40, 
    padding: 20, 
    backgroundColor: '#1E1E1E', 
    borderRadius: 15, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00E5FF'
  },
  btnBackText: { 
    color: '#00E5FF', 
    fontWeight: 'bold',
    letterSpacing: 1
  }
});