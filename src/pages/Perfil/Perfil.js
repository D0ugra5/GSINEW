import React from "react";
import {TabBar,Tab, Avatar, Layout,  } from "@ui-kitten/components";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from "./PerfilStyles";
import ItemList from "../../components/ItemList";
import Dados  from './Dados.js'
import Infos  from './Infos.js'
import { ScrollView, View } from "react-native";
const { Navigator, Screen } = createMaterialTopTabNavigator();
const TopTabBar = ({ navigation, state }) => (
  <TabBar
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
    
      <Tab title='Perfil' />
      <Tab title='Dados' />
   

  </TabBar>
);

const TabNavigator = () => (
  <>

  <Navigator tabBar={props => <TopTabBar {...props} />}>
  
      <Screen name='Conjuge' component={Dados} />
      <Screen name='Dados' component={Infos} />

  </Navigator>

  </>
);
 const Perfil = () => (

  <>
  <Layout style={styles.main2}>
   <NavigationContainer independent='true'>
          <TabNavigator/>
        </NavigationContainer>
  
        </Layout>
  </>
);

export default Perfil;
