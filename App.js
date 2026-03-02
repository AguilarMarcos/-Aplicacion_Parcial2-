import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ExampleEvent from './screens/ExampleEvent';
import Counter from './screens/Counter';
import AboutMeScreen from './screens/AboutMeScreen';
import FoodFavScreen from './screens/FoodFavScreen';
import MoviesFavScreen from './screens/MoviesFavScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: '#121212', elevation: 0, shadowOpacity: 0 },
          headerTintColor: '#00E5FF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'PORTAFOLIO' }} />
        <Stack.Screen name="ExampleEvent" component={ExampleEvent} options={{ title: 'Eventos' }} />
        <Stack.Screen name="Counter" component={Counter} options={{ title: 'Contador' }} />
        <Stack.Screen name="AboutMe" component={AboutMeScreen} options={{ title: 'Sobre Mí' }} />
        <Stack.Screen name="FoodFav" component={FoodFavScreen} options={{ title: 'Comidas' }} />
        <Stack.Screen name="MoviesFav" component={MoviesFavScreen} options={{ title: 'Películas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}