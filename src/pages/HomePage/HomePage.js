import React from 'react';
import { Card, Layout, Button, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from "react-native";
import styles from './HomePageStyle.js'
import { Ionicons, AntDesign, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
const HomeScreen = () => {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.navigate('Consultas', {})
  }
  function navigatePerfil() {
    navigation.navigate('Perfil', {})
  }

  function navigateMedicamento() {
    navigation.navigate('Medicamentos', {})
  }

  function navigateSchedule() {
    navigation.navigate('Agenda', {})
  }

  function navigateCarteira() {
    navigation.navigate('Carteira de Vacinação', {})
  }


  

  function navigateSaude() {
    navigation.navigate('Unidade de Saude', {})
  }

  return (
    <>
      <Layout style={styles.containerMain} level='1'>  
        <Layout style={styles.ContainerDiv1} level='1'>

          <Card onPress={() => navigatePerfil()} style={styles.cardImg} >

            <Card style={styles.Containerimg}>

              <AntDesign onPress={() =>navigatePerfil()} name="user" size={40} color="purple" />

            </Card>


            <Text category='h6' style={styles.txt}>Profile</Text>
          </Card>







          <Card onPress={() =>  navigateMedicamento()} style={styles.cardImg} >

            <Card style={styles.Containerimg}>

              <AntDesign onPress={() => navigateMedicamento()} name="medicinebox" size={40} color="red" />

            </Card>


            <Text category='p' style={styles.txt}>Medicamento</Text>
          </Card>


          <Card onPress={() => navigateBack()} style={styles.cardImg} >

            <Card style={styles.Containerimg}>
            <FontAwesome5 name="file-medical-alt" size={40} color="orange" />
             

            </Card>


            <Text category='h6' style={styles.txt}>Consulta</Text>
          </Card>
        </Layout>
        <Layout style={styles.ContainerDiv2} level='1'>

          <Card onPress={() => navigateCarteira()} style={styles.cardImg} >

            <Card onPress={() => navigateCarteira()} style={styles.Containerimg}>

            <MaterialCommunityIcons name="gesture-spread" size={40} color="green" />

            </Card>


            <Text category='p' style={styles.txt}>Carteira V.</Text>
           
          </Card>


          <Card onPress={() => navigateSchedule()} style={styles.cardImg} >

            <Card style={styles.Containerimg}>

            <MaterialIcons onPress={() => navigateSchedule()} name="schedule" size={40} color="blue" />

            </Card>


            <Text category='h6' style={styles.txt}>Agenda </Text>
          </Card>



          <Card onPress={() => navigateSaude()} style={styles.cardImg} >

            <Card onPress={() => navigateSaude()} style={styles.Containerimg}>

            <FontAwesome5 name="hand-holding-medical" size={40} color="#99ffff" />

            </Card>


            <Text category='p' style={styles.txt}>Unidade</Text>
          </Card>


        </Layout>
      </Layout>
    </>
  )
};

export default HomeScreen