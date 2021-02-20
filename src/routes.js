import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();
import Consultas from './pages/Consultas/consulta.js'
import HomeScreen from './pages/HomePage/HomePage.js'

function Routas() {
    return (
        <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HOME"
        headerMode="screen"
    >
        <Stack.Screen
        
          name="HOME"
          component={HomeScreen}
          options={{
            title: 'Itaqua',
            
          }}
        />

<Stack.Screen
          name="Consultas"
          component={Consultas}
          
        />
       
      
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default Routas