import React from 'react';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';
import CamposInput from '../../components/CampoInp.js'
import styles from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cras from './cras'
import Hospital from './hospital'
import Ubs from './ubs'

import Agendados from '../../Partials/Consulta/Agendadas.js'
const { Navigator, Screen } = createMaterialTopTabNavigator();
const TopTabBar = ({ navigation, state }) => (
    <TabBar
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='Cras' />
        <Tab title='Hospital' />
        <Tab title='Ubs' />
    </TabBar>
);
const TabNavigator = () => (
    <Navigator tabBar={props => <TopTabBar {...props} />}>
        <Screen name='Cras' component={Cras} />
        <Screen name='Hospital' component={Hospital} />
        <Screen name='Ubs' component={Ubs} />
     
    </Navigator>
);




export const Unidade = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <>
            <Layout style={styles.containerMain} level='1'>

                <NavigationContainer independent='true'>
                <Layout style={styles.ContainerText} level='3'>
                 
                </Layout>
                    <TabNavigator />
                
                </NavigationContainer>
               
              
            </Layout>

        </>
    );

}

export default Unidade