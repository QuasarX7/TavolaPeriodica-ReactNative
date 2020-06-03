import React from 'react';
import { StyleSheet, Text, View} from 'react-native'

const ALTEZZA = 33;
class Elemento extends React.Component {
    render(){
        return (
            <Text 
                key={this.props.id} 
                style={this.props.dati.length ? styles.cella : styles.cellaVuota}>
                    {this.props.dati}
            </Text>
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
      backgroundColor: '#4d79ff55',
      margin : 0.2,
      justifyContent:'center',
      height : ALTEZZA,
      textAlign : 'center',
      textAlignVertical : 'center',
      fontSize : 20,
      borderRadius: 4
  }
  
  });


  export default Elemento;