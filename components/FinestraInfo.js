import React from 'react';
import {Modal,StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class FinestraInfo extends React.Component {
    render(){
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.dati && this.props.stato()}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.finestraInfo}>
                    <View style={styles.areaInfo}>
                        <Text style={styles.testoNome}>
                            {this.props.dati ? this.props.dati.nome : ''}
                        </Text>
                        <Text style={styles.testoSimbolo}>
                            {this.props.dati ? this.props.dati.simbolo : ''}
                        </Text>
                        <Text style={styles.testoNrAtomico}>
                            {'numero: '}{this.props.dati ? this.props.dati.numeroAtomico : ''}
                        </Text>
                        <Text style={styles.testoMassa}>
                            {'massa: '}{this.props.dati ? this.props.dati.peso : ''}
                        </Text>
                        <TouchableOpacity
                            style={styles.pulsanteFinestraInfo }
                            onPress={() => {
                                this.props.chiudi();
                            }}
                        >
                            <Text style={styles.testpPulsante}>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal> 
        )
    }
}

const styles = StyleSheet.create({
    finestraInfo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    areaInfo: {
        width: '33%',
        height: '66%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 0,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    pulsanteFinestraInfo: {
        position: 'absolute',
        top : -10,
        right :-10,
        backgroundColor: "#333",
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical:5,
        elevation: 2
    },
    testpPulsante: {
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    },
    testoNome: {
        position: 'absolute',
        top : 20,
        left : 95,
        fontSize : 20
    },
    testoSimbolo: {
        position: 'absolute',
        top : 0,
        left : 20,
        fontSize : 40
    },
    testoMassa: {
        position: 'absolute',
        top : 77,
        left : 15,
        fontSize : 16
    },
    testoNrAtomico: {
        position: 'absolute',
        top : 55,
        left : 15,
        fontSize : 16
    }
});

export default FinestraInfo; 