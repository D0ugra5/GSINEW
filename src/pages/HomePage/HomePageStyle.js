import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,

        marginTop: 10,

        alignItems: "baseline",
        justifyContent: 'flex-start',
        flexDirection: 'row',


    },

    tinyicon: {
        width: 90,
        height: 90,


    },

    cardImg: {

        padding: 5,
        marginTop: 25,
        width: '80%',
        height: '25%',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.0,
        shadowRadius: 5,
        elevation: 3,
    },

    ContainerDiv1: {
        marginLeft: '3%',
        width: '50%',

    },

    ContainerDiv2: {

        width: '50%',

    },
    txt: {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        textDecorationColor: '#000',
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 13



    },
    Containerimg: {
        borderRadius: 18,
        width: '100%',
        backgroundColor: '#f5f5f5',
    }



});

export default styles;