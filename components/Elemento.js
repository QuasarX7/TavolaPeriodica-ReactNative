import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FinestraInfo from './FinestraInfo'

const ALTEZZA = 33;
class Elemento extends React.Component {
    state = {
        infoVisibile: false
    };
    setVisibileInfo = (visibile) => {
        this.setState({ infoVisibile: visibile });
    }

    getVisibileInfo = () => {
        return this.state.infoVisibile;
    }

    render(){
        return (
            
            <TouchableOpacity 
                key={this.props.id}  
                style={
                    this.props.dati != null 
                    ? [{...styles.cella},{backgroundColor: this.props.dati.colore}] 
                    : styles.cellaVuota
                } 
                onPress={() => {this.setVisibileInfo(true)}}>

                <FinestraInfo 
                    stato={this.getVisibileInfo.bind(this)} 
                    chiudi={this.setVisibileInfo.bind(this,false)} 
                    dati={this.props.dati}/> 

                <Text style={styles.testo} >
                    {this.props.dati ? this.props.dati.simbolo : ''}
                </Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    cellaVuota : {
        backgroundColor: '#ddd',
        height : ALTEZZA,
        margin : 0.2
    },
    cella : {
      borderWidth : 1,
      //backgroundColor: '#4d79ff55',
      margin : 0.2,
      justifyContent:'center',
      height : ALTEZZA,
      borderRadius: 4
    },
    testo : {
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 20,
    }
  
  });


  export default Elemento;