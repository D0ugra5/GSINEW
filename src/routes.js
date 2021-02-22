import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, BlurView, Image } from 'react-native';

const Stack = createStackNavigator();


import Perfil from './pages/Perfil/Perfil.js'
import Consultas from './pages/Consultas/consulta.js'
import Unidade from './pages/Unidade/index.js'
import HomeScreen from './pages/HomePage/HomePage.js'
import Schedule from './pages/Schedule/index.js'
import Med from "./pages/Medicamentos/index.js";
import Carteira from './pages/CarteiraVirtual/index.js'
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
            title: 'Itaquacetuba',


          }}


        >


        </Stack.Screen>

        <Stack.Screen
          name="Consultas"
          component={Consultas}
          options={{
          }}
        />



        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
          }}
        />

        <Stack.Screen
          name="Medicamentos"
          component={Med}
          options={{
          }}
        />

        <Stack.Screen
          name="Agenda"
          component={Schedule}
          options={{
          }}
        />


        <Stack.Screen
          name="Carteira de Vacinação"
          component={Carteira}
          options={{
          }}
        />

<Stack.Screen
          name="Unidade de Saude"
          component={Unidade}
          options={{
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routas