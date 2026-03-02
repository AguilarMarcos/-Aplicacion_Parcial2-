import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import ExampleEvent from './screens/ExampleEvent';
import Counter from './screens/Counter';

const stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        >
            <stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
            <stack.Screen name="ExampleEvent" component={ExampleEvent} options={{ title: 'Eventos' }} />
            <stack.Screen name="Counter" component={Counter} options={{ title: 'Contador' }} />
        </stack.Navigator>
    );
}