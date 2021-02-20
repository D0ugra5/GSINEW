import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import HomeScreen from './src/pages/HomePage/HomePage.js'
import Consultas from './src/pages/Consultas/consulta.js'
import Routas from './src/routes.js';
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light }>
<Routas></Routas>

  </ApplicationProvider>
  );
}


