import React from 'react';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import Consultas from '../Consultas/consulta.js'

const HomeScreen = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.navigate('Consultas',{})
  }
  return (
    <>
      <Layout level='1'>
        <Text>Home</Text>
        <Button onPress={() => navigateBack()}>
          BUTTON
</Button>
      </Layout>
    </>
  )
};

export default HomeScreen