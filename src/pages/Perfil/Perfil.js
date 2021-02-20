import React from 'react';
import { Avatar, Layout, Input } from '@ui-kitten/components';
import CamposInput from '../../components/CampoInp.js'
import styles from './PerfilStyles'

export const Perfil = () => (
    <>
        <Layout style={styles.container2} level='1'>

 <Avatar  style={styles.avatar} size='giant' source={require('../../../assets/caio.png')} />
           

       
        <Layout style={styles.campos} level='3'>

            <CamposInput></CamposInput>

        </Layout>
        </Layout>
    </>


);



export default Perfil