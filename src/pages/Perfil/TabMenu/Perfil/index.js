import React, { useState } from "react";

import { Avatar, Layout, Text, Modal, Button, Card } from "@ui-kitten/components";
import { Image, ScrollView, View } from "react-native";

import styles from './styles'



import qrcode from "../../../../assets/qrcode.jpeg";


export default function Perfil() {

  const [visible, setVisible] = useState(false);
  return (

    <ScrollView>
      <Layout style={styles.containerMain} level="1">


        <Layout style={styles.containerProfile}>
          <View style={styles.div}>
            <Avatar
              style={styles.avatar}
              size="giant"
              source={require("../../../../assets/cicero.png")} />

            <Text category="h5" style={styles.Text}>
              Cicero Teixeira
             </Text>
          </View>


          
          <Button style={styles.button} onPress={() => setVisible(true)}>
            Exibir QrCode
            </Button>
        </Layout>





        <Layout style={styles.containerInfo} level="2">

          <View style={{ alignItems: 'center', width: "100%" }}>
            <Text style={styles.txt2}>Informações</Text>
          </View>


          <Text style={styles.txt}>
            CNS/SUS: 905068959393959349848939
                </Text>
          <Text style={styles.txt}>Tel:999999999999</Text>
          <Text style={styles.Text3}>RG:12.223.444-8 | CPF:45.667.778-4</Text>
          <Text style={styles.txt}>Celular: 9999999</Text>

          <Text style={styles.txt}>
            Obs: Necessita de medicamentos restritos, paciente de nivel critico,
            ultima Vez atendido na UBS Itaqua pelo Medico Carlos Bessa
            Obs: Necessita de medicamentos restritos, paciente de nivel critico,
            ultima Vez atendido na UBS Itaqua pelo Medico Carlos Bessa
            Obs: Necessita de medicamentos restritos, paciente de nivel critico,
            ultima Vez atendido na UBS Itaqua pelo Medico Carlos Bessa
            </Text>

        </Layout>



        <Modal
          visible={visible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible(false)}
        >
          <Card disabled={true} style={styles.card}>
            <Image source={qrcode} style={{ width: 180, height: 180, marginBottom: 10 }} />

            <Button onPress={() => setVisible(false)}>Ok !</Button>
          </Card>
        </Modal>

      </Layout>

    </ScrollView>


  );

}

