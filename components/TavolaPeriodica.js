import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Elemento from './Elemento';


    
class TavolaPeriodica extends React.Component {
    elementi = [
        { simbolo : 'H',    nome : 'idrogeno',    periodo :  1, gruppo :  1},
        { simbolo : 'He',   nome : 'elio',        periodo :  1, gruppo : 18},
        { simbolo : 'Li',   nome : 'litio',       periodo :  2, gruppo :  1},
        { simbolo : 'Be',   nome : 'berillio',    periodo :  2, gruppo :  2},
        { simbolo : 'Na',   nome : 'sodio',       periodo :  3, gruppo :  1},
        { simbolo : 'Mg',   nome : 'magnesio',    periodo :  3, gruppo :  2},
        { simbolo : 'B',    nome : 'boro',        periodo :  2, gruppo : 13},
        { simbolo : 'C',    nome : 'carbonio',    periodo :  2, gruppo : 14},
        { simbolo : 'N',    nome : 'azoto',       periodo :  2, gruppo : 15},
        { simbolo : 'O',    nome : 'ossigeno',    periodo :  2, gruppo : 16},
        { simbolo : 'Ne',   nome : 'neon',        periodo :  2, gruppo : 18},
        { simbolo : 'K',    nome : 'potassio',    periodo :  4, gruppo : 1},
        { simbolo : 'Ca',   nome : 'calcio',      periodo :  4, gruppo : 2},
        { simbolo : 'Sc',   nome : 'scandio',     periodo :  4, gruppo : 3},
        { simbolo : 'Ti',   nome : 'titanio',     periodo :  4, gruppo : 4},
        { simbolo : 'V',    nome : 'vanadio',     periodo :  4, gruppo : 5},
        { simbolo : 'Cr',   nome : 'cromo',       periodo :  4, gruppo : 6},
        { simbolo : 'Mn',   nome : 'manganese',   periodo :  4, gruppo : 7},
        { simbolo : 'Fe',   nome : 'ferro',       periodo :  4, gruppo : 8},
        { simbolo : 'Co',   nome : 'cobalto',     periodo :  4, gruppo : 9},
        { simbolo : 'F',    nome : 'fluoro',      periodo :  2, gruppo : 17},
        { simbolo : 'Ni',   nome : 'nichel',      periodo :  4, gruppo : 10},
        { simbolo : 'Cu',   nome : 'rame',        periodo :  4, gruppo : 11},
        { simbolo : 'Zn',    nome : 'zinco',      periodo :  4, gruppo : 12},
        { simbolo : 'Ga',    nome : 'gallio',     periodo :  4, gruppo : 13},
        { simbolo : 'Al',    nome : 'alluminio',  periodo :  3, gruppo : 13},
        { simbolo : 'Si',    nome : 'silicio',    periodo :  3, gruppo : 14},
        { simbolo : 'P',    nome : 'fosforo',     periodo :  3, gruppo : 15},
        { simbolo : 'S',    nome : 'zolfo',       periodo :  3, gruppo : 16},
        { simbolo : 'Cl',    nome : 'cluoro',    periodo :  3, gruppo : 17},
        { simbolo : 'Ar',    nome : 'argon',     periodo :  3, gruppo : 18},
        { simbolo : 'Ge',    nome : 'germanio',  periodo :  4, gruppo : 14},
        { simbolo : 'As',    nome : 'arsenico',   periodo :  4, gruppo : 15},
        { simbolo : 'Se',    nome : 'selenio',     periodo :  4, gruppo : 16},
        { simbolo : 'Br',    nome : 'bromo',     periodo :  4, gruppo : 17},
        { simbolo : 'Kr',    nome : 'kripton',     periodo :  4, gruppo : 18},
        { simbolo : 'Cs',    nome : 'cesio',     periodo :  6, gruppo : 1},
        { simbolo : 'Ba',    nome : 'bario',     periodo :  6, gruppo : 2},
        { simbolo : 'Fr',    nome : 'francio',     periodo :  7, gruppo : 1},
        { simbolo : 'Ra',    nome : 'radio',     periodo :  7, gruppo : 2},
        { simbolo : 'Rb',    nome : 'rubidio',     periodo :  5, gruppo : 1},
        { simbolo : 'Sr',    nome : 'stronzio',     periodo :  5, gruppo : 2},

        { simbolo : 'La',    nome : 'lantanio',     periodo :  9, gruppo : 4},
        { simbolo : 'Ra',    nome : 'attinio',     periodo :  10, gruppo : 4},
        { simbolo : 'U',    nome : 'uranio',     periodo :  10, gruppo : 7},
        { simbolo : 'Lu',    nome : 'lutezio',     periodo :  9, gruppo : 18},
        { simbolo : 'Lr',    nome : 'laurenzio',     periodo :  10, gruppo :18},
        { simbolo : 'Hf',    nome : 'afnio',     periodo :  6, gruppo :4},
        { simbolo : 'Rf',    nome : 'rutherfordio',     periodo :  7, gruppo :4},
        { simbolo : 'Y',    nome : 'ittrio',     periodo :  5, gruppo :3},
        { simbolo : 'Zr',    nome : 'zirconio',     periodo :  5, gruppo :4},
        { simbolo : 'Dd',    nome : 'dubnio',     periodo :  7, gruppo :5},
        { simbolo : 'Ubn',    nome : 'unbinilium',     periodo :  8, gruppo :2},
        { simbolo : 'Uue',    nome : 'ununennium',     periodo :  8, gruppo :1},
        { simbolo : 'Ubn',    nome : 'unbinilium',     periodo :  8, gruppo :2},
        { simbolo : 'Ts',    nome : 'tennesso',     periodo :  7, gruppo :17},
        { simbolo : 'Og',    nome : 'oganesson',     periodo :  7, gruppo :18},
        { simbolo : 'Cn',    nome : 'copernicio',     periodo :  7, gruppo :12},
        
    ]
    

    render(){
        const nColonne = 18;
        const nRighe = 10;
        const tabella = [];
        for(let c=0; c < nColonne; c++){
            let riga = [];
            for (let r=0; r < nRighe; r++) {
                let elemento = '';
                const risultati = this.elementi.filter((e)=>{return e.periodo === r+1 && e.gruppo === c+1});
                if(risultati && risultati.length > 0)
                    elemento = risultati[0].simbolo;
                riga.push( (<Elemento key={r+' '+c} dati={elemento}/>) )
            }
            tabella.push( (<View key={'c'+c} style={styles.righe}>{riga}</View>) );
        }
        
        /*const righe = this.elementi.map(riga => {
            return (<Text key={riga.id}>{riga.valore}</Text>);
        });*/
        return (
            <View style={styles.container}>
                <Text style={styles.intestazione}>Tavola Periodica</Text>
                <View style={styles.tabella}>
                    {tabella}
                </View>
            </View>
        )
    }
  
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection : 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    intestazione:{
        margin : 2,
        color: '#4d79ff',
        fontWeight : 'bold'
    },
    tabella:{
      flexDirection : 'row'
    },
    righe:{
      flex:1,
      flexDirection : 'column',
      height : '100%'
    }
  
  });

export default TavolaPeriodica;