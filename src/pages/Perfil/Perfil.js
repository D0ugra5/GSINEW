import React from "react";
import {TabBar,Tab, Avatar, Layout, Text } from "@ui-kitten/components";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from "./PerfilStyles";
import ItemList from "../../components/ItemList";
import Dados  from './Dados.js'
const { Navigator, Screen } = createMaterialTopTabNavigator();
const TopTabBar = ({ navigation, state }) => (
  <TabBar
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <Tab title='Dados' />
      <Tab title='Conjuge' />

  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
      <Screen name='Dados' component={Dados} />
      <Screen name='Conjuge' component={Dados} />
      

     

     
  </Navigator>
);
export const Perfil = () => (
  <Layout style={styles.containerMain} level="1">
    <Layout style={styles.containerBody} level="1">
      <Layout style={styles.containerProfile}>
        
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require("../../../assets/cicero.png")}
        />
        <Text category="h4" style={styles.Text}>
         Cicero Teiceira 
        </Text>
        <Text style={styles.Text3}>RG:12.223.444-8 | CPF:45.667.778-4</Text>
      </Layout>

      <Layout style={styles.containerInfo} level="1">
        <ItemList />
        <ItemList />
        <ItemList />

    <NavigationContainer independent='true'>
          <TabNavigator/>
        </NavigationContainer>

      
      </Layout>
 
 
    </Layout>
 
  </Layout>
);

export default Perfil;
