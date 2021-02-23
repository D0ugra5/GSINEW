import React from "react";
import { TabBar, Tab, Layout, } from "@ui-kitten/components";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from "./styles";

import Dados from './TabMenu/Perfil/index.js'
import Infos from './TabMenu/Dados/index.js'
import Clinico from './TabMenu/Clinico/index.js'
import Endereco from './TabMenu/Endereco/index.js'

const { Navigator, Screen } = createMaterialTopTabNavigator();


const TopTabBar = ({ navigation, state }) => (

  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>

    <Tab title='Perfil' />
    <Tab title='Familiares' />
    <Tab title='Clinicos' />
    <Tab title='Endereço' />


  </TabBar>
);

const TabNavigator = () => (


  <Navigator tabBar={props => <TopTabBar {...props} />}>

    <Screen name='Conjuge' component={Dados} />
    <Screen name='Dados' component={Infos} />
    <Screen name='Clinicos' component={Clinico} />
    <Screen name='Endereço' component={Endereco} />

  </Navigator>


);

export default function Perfil() {
  return (
    <Layout style={styles.main2}>
      <NavigationContainer independent='true'>
        <TabNavigator />
      </NavigationContainer>

    </Layout>

  )
}






