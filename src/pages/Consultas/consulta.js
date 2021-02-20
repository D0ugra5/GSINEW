import React from 'react';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';
import CamposInput from '../../components/CampoInp.js'
import styles from './ConsultaStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pesquisa from '../../Partials/Consulta/Pesquisas.js'
import Agendados from '../../Partials/Consulta/Agendadas.js'
const { Navigator, Screen } = createMaterialTopTabNavigator();
const TopTabBar = ({ navigation, state }) => (
    <TabBar
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='Agendadas' />
        <Tab title='Pesquisar' />
    </TabBar>
);
const TabNavigator = () => (
    <Navigator tabBar={props => <TopTabBar {...props} />}>
        <Screen name='Users' component={Agendados} />
        <Screen name='Orders' component={Pesquisa} />
    </Navigator>
);




export const Consultas = () => {
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

export default Consultas