import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Elemento from './Elemento';


    
class TavolaPeriodica extends React.Component {
    elementi = [
        { simbolo : 'H',    nome : 'idrogeno',    periodo :  1, gruppo :  1, peso: 1.008, numeroAtomico : 1},
        { simbolo : 'He',   nome : 'elio',        periodo :  1, gruppo : 18, peso: 4.003, numeroAtomico : 2},
        { simbolo : 'Li',   nome : 'litio',       periodo :  2, gruppo :  1, peso: 6.941, numeroAtomico : 3},
        { simbolo : 'Be',   nome : 'berillio',    periodo :  2, gruppo :  2, peso: 9.012, numeroAtomico : 4},
        { simbolo : 'Na',   nome : 'sodio',       periodo :  3, gruppo :  1, peso: 22.9898, numeroAtomico : 11},
        { simbolo : 'Mg',   nome : 'magnesio',    periodo :  3, gruppo :  2, peso: 24.305, numeroAtomico : 12},
        { simbolo : 'B',    nome : 'boro',        periodo :  2, gruppo : 13, peso: 10.81, numeroAtomico : 5},
        { simbolo : 'C',    nome : 'carbonio',    periodo :  2, gruppo : 14, peso: 12.011, numeroAtomico : 6},
        { simbolo : 'N',    nome : 'azoto',       periodo :  2, gruppo : 15, peso: 14.0067, numeroAtomico : 7},
        { simbolo : 'O',    nome : 'ossigeno',    periodo :  2, gruppo : 16, peso: 15.9994, numeroAtomico : 8},
        { simbolo : 'Ne',   nome : 'neon',        periodo :  2, gruppo : 18, peso: 20.179, numeroAtomico : 10},
        { simbolo : 'K',    nome : 'potassio',    periodo :  4, gruppo : 1, peso: 39.0983, numeroAtomico : 19},
        { simbolo : 'Ca',   nome : 'calcio',      periodo :  4, gruppo : 2, peso: 40.08, numeroAtomico : 20},
        { simbolo : 'Sc',   nome : 'scandio',     periodo :  4, gruppo : 3, peso: 44.9559, numeroAtomico : 21},
        { simbolo : 'Ti',   nome : 'titanio',     periodo :  4, gruppo : 4, peso: 47.9, numeroAtomico : 22},
        { simbolo : 'V',    nome : 'vanadio',     periodo :  4, gruppo : 5, peso: 50.9415, numeroAtomico : 23},
        { simbolo : 'Cr',   nome : 'cromo',       periodo :  4, gruppo : 6, peso: 51.9415, numeroAtomico : 24},
        { simbolo : 'Mn',   nome : 'manganese',   periodo :  4, gruppo : 7, peso: 54.938, numeroAtomico : 25},
        { simbolo : 'Fe',   nome : 'ferro',       periodo :  4, gruppo : 8, peso: 55.847, numeroAtomico : 26},
        { simbolo : 'Co',   nome : 'cobalto',     periodo :  4, gruppo : 9, peso: 58.9332, numeroAtomico : 27},
        { simbolo : 'F',    nome : 'fluoro',      periodo :  2, gruppo : 17, peso: 35.453, numeroAtomico : 9},
        { simbolo : 'Ni',   nome : 'nichel',      periodo :  4, gruppo : 10, peso: 58.7, numeroAtomico : 28},
        { simbolo : 'Cu',   nome : 'rame',        periodo :  4, gruppo : 11, peso: 63.546, numeroAtomico : 29},
        { simbolo : 'Zn',    nome : 'zinco',      periodo :  4, gruppo : 12, peso: 65.38, numeroAtomico : 30},
        { simbolo : 'Ga',    nome : 'gallio',     periodo :  4, gruppo : 13, peso: 69.72, numeroAtomico : 31},
        { simbolo : 'Al',    nome : 'alluminio',  periodo :  3, gruppo : 13, peso: 26.9815, numeroAtomico : 13},
        { simbolo : 'Si',    nome : 'silicio',    periodo :  3, gruppo : 14, peso: 28.0855, numeroAtomico : 14},
        { simbolo : 'P',    nome : 'fosforo',     periodo :  3, gruppo : 15, peso: 30.9738, numeroAtomico : 15},
        { simbolo : 'S',    nome : 'zolfo',       periodo :  3, gruppo : 16, peso: 32.06, numeroAtomico : 16},
        { simbolo : 'Cl',    nome : 'cluoro',    periodo :  3, gruppo : 17, peso: 35.453, numeroAtomico : 17},
        { simbolo : 'Ar',    nome : 'argon',     periodo :  3, gruppo : 18, peso: 39.948, numeroAtomico : 18},
        { simbolo : 'Ge',    nome : 'germanio',  periodo :  4, gruppo : 14, peso: 72.59, numeroAtomico : 32},
        { simbolo : 'As',    nome : 'arsenico',   periodo :  4, gruppo : 15, peso: 74.9216, numeroAtomico : 33},
        { simbolo : 'Se',    nome : 'selenio',     periodo :  4, gruppo : 16, peso: 78.96, numeroAtomico : 34},
        { simbolo : 'Br',    nome : 'bromo',     periodo :  4, gruppo : 17, peso: 79.904, numeroAtomico : 35},
        { simbolo : 'Kr',    nome : 'kripton',     periodo :  4, gruppo : 18, peso: 83.8, numeroAtomico : 36},
        { simbolo : 'Cs',    nome : 'cesio',     periodo :  6, gruppo : 1, peso: 132.9054, numeroAtomico : 55},
        { simbolo : 'Ba',    nome : 'bario',     periodo :  6, gruppo : 2, peso: 137.33, numeroAtomico : 56},
        { simbolo : 'Fr',    nome : 'francio',     periodo :  7, gruppo : 1, peso: 223, numeroAtomico : 87},
        { simbolo : 'Ra',    nome : 'radio',     periodo :  7, gruppo : 2, peso: 226.025, numeroAtomico : 88},
        { simbolo : 'Rb',    nome : 'rubidio',     periodo :  5, gruppo : 1, peso: 85.4678, numeroAtomico : 37},
        { simbolo : 'Sr',    nome : 'stronzio',     periodo :  5, gruppo : 2, peso: 87.62, numeroAtomico : 38},

        { simbolo : 'La',    nome : 'lantanio',     periodo :  9, gruppo : 4, peso: 138.9055, numeroAtomico : 57},
        { simbolo : 'Ac',    nome : 'attinio',     periodo :  10, gruppo : 4, peso: 227.028, numeroAtomico : 89},
        { simbolo : 'U',    nome : 'uranio',     periodo :  10, gruppo : 7, peso: 238.029, numeroAtomico : 92},
        { simbolo : 'Lu',    nome : 'lutezio',     periodo :  9, gruppo : 18, peso: 174.967, numeroAtomico : 71},
        { simbolo : 'Lr',    nome : 'laurenzio',     periodo :  10, gruppo :18, peso: 103, numeroAtomico : 260},
        { simbolo : 'Hf',    nome : 'afnio',     periodo :  6, gruppo :4, peso: 178.49, numeroAtomico : 72},
        { simbolo : 'Rf',    nome : 'rutherfordio',     periodo :  7, gruppo :4, peso: 261, numeroAtomico : 104},
        { simbolo : 'Y',    nome : 'ittrio',      periodo : 5,  gruppo : 3, peso: 88.9059, numeroAtomico : 39},
        { simbolo : 'Nb',     nome : 'niobio',    periodo : 5,  gruppo : 5, peso: 92.91,    numeroAtomico : 41},
        { simbolo : 'Mo',     nome : 'molibdeno', periodo : 5,  gruppo : 6, peso: 95.84,    numeroAtomico : 42},
        { simbolo : 'Tc',     nome : 'tecnezio',  periodo : 5,  gruppo : 7, peso: 98.91,    numeroAtomico : 43},
        { simbolo : 'Ru',     nome : 'rutenio',   periodo : 5,  gruppo : 8, peso: 101.1,    numeroAtomico : 44},
        { simbolo : 'Rh',     nome : 'rodio',     periodo : 5,  gruppo : 9, peso: 102.9,    numeroAtomico : 45},
        { simbolo : 'Pd',     nome : 'palladio',  periodo : 5,  gruppo :10, peso: 106.4,    numeroAtomico : 46},
        { simbolo : 'Ag',     nome : 'argento',   periodo : 5,  gruppo :11, peso: 107.9,    numeroAtomico : 47},
        { simbolo : 'Cd',     nome : 'cadmio',    periodo : 5,  gruppo :12, peso: 112.4,    numeroAtomico : 48},
        { simbolo : 'In',     nome : 'indio',     periodo : 5,  gruppo :13, peso: 114.8,    numeroAtomico : 49},
        { simbolo : 'Sn',     nome : 'stagno',    periodo : 5,  gruppo :14, peso: 118.7,    numeroAtomico : 50},
        { simbolo : 'Sb',     nome : 'antimonio', periodo : 5,  gruppo :15, peso: 121.8,    numeroAtomico : 51},
        { simbolo : 'Te',     nome : 'tellurio',  periodo : 5,  gruppo :16, peso: 127.6,    numeroAtomico : 52},
        { simbolo : 'I',      nome : 'iodio',     periodo : 5,  gruppo :17, peso: 126.9,    numeroAtomico : 53},
        { simbolo : 'Xe',      nome : 'xenon',     periodo : 5,  gruppo :18, peso: 131.3,    numeroAtomico : 54},
        { simbolo : 'Ta',      nome : 'tantalio',  periodo : 6,  gruppo : 5, peso: 180.9,    numeroAtomico : 73},
        { simbolo : 'W',      nome : 'tungsteno',  periodo : 6,  gruppo : 6, peso: 183.8,    numeroAtomico : 74},
        { simbolo : 'Re',      nome : 'renio',     periodo : 6,  gruppo : 7, peso: 186.2,    numeroAtomico : 75},
        { simbolo : 'Os',      nome : 'osmio',     periodo : 6,  gruppo : 8, peso: 190.2,    numeroAtomico : 76},
        { simbolo : 'Ir',      nome : 'iridio',    periodo : 6,  gruppo : 9, peso: 192.2,    numeroAtomico : 77},
        { simbolo : 'Pt',      nome : 'pratino',   periodo: 6,   gruppo :10, peso: 195.1,    numeroAtomico : 78},
        { simbolo : 'Au',      nome : 'oro',       periodo : 6,  gruppo :11, peso: 197,      numeroAtomico : 79},
        { simbolo : 'Hg',      nome : 'mercurio',  periodo : 6,  gruppo :12, peso: 200.6,    numeroAtomico : 80},
        { simbolo : 'Tl',      nome : 'tallio',    periodo : 6,  gruppo :13, peso: 204.4,    numeroAtomico : 81},
        { simbolo : 'Pb',      nome : 'piombo',    periodo : 6,  gruppo :14, peso: 207.2,    numeroAtomico : 82},
        { simbolo : 'Bi',      nome : 'bismuto',   periodo : 6,  gruppo :15, peso: 209,      numeroAtomico : 83},
        { simbolo : 'Po',      nome : 'polonio',   periodo : 6,  gruppo :16, peso: 209,      numeroAtomico : 84},
        { simbolo : 'At',      nome : 'astato',     periodo :6,  gruppo :17, peso: 210,      numeroAtomico : 85},
        { simbolo : 'Rn',      nome : 'radon',     periodo : 6,  gruppo :18, peso: 222,      numeroAtomico :86},
        { simbolo : 'Sg',      nome : 'seaborgio', periodo : 7,  gruppo :6, peso: 266,    numeroAtomico : 106},
        { simbolo : 'Bh',      nome : 'bohrio',     periodo :7,  gruppo :7, peso: 264,    numeroAtomico : 107},
        { simbolo : 'Hs',      nome : 'hassio',     periodo :7,  gruppo :8, peso: 265,    numeroAtomico :108 },
        { simbolo : 'Mt',      nome : 'meitnerio',  periodo :7,  gruppo :9, peso: 268,    numeroAtomico : 109},
        { simbolo : 'Ds',      nome : 'darmstadtio',periodo :7,  gruppo :10, peso:271,    numeroAtomico : 110},
        { simbolo : 'Rg',      nome : 'roentgenio', periodo : 7,  gruppo:11, peso:272,    numeroAtomico : 111},
        { simbolo : 'Nh',      nome : 'nihonio',     periodo :7,  gruppo:13, peso:284,    numeroAtomico : 113},
        { simbolo : 'Fl',      nome : 'flerovio',    periodo :7,  gruppo:14, peso: 289,    numeroAtomico : 114},
        { simbolo : 'Mc',      nome : 'moscovio',    periodo :7,  gruppo:15, peso: 288,    numeroAtomico : 115},
        { simbolo : 'Lv',      nome : 'livermorio',  periodo :7,  gruppo :16, peso:292,    numeroAtomico : 116},
        { simbolo : 'Ce',      nome : 'cerio',       periodo : 9,  gruppo :5, peso: 140.1,    numeroAtomico : 58},
        { simbolo : 'Pr',      nome : 'praseodimio', periodo : 9,  gruppo :6, peso: 140.9,    numeroAtomico : 59},
        { simbolo : 'Nd',      nome : 'neodimio',    periodo : 9,  gruppo :7, peso: 144.2,    numeroAtomico : 60},
        { simbolo : 'Pm',      nome : 'promezio',    periodo : 9,  gruppo :8, peso: 145,    numeroAtomico : 61},
        { simbolo : 'Sm',      nome : 'samario',     periodo : 9,  gruppo :9, peso: 150.4,    numeroAtomico : 62},
        { simbolo : 'Eu',      nome : 'europio',     periodo : 9,  gruppo :10, peso:152,    numeroAtomico : 63},
        { simbolo : 'Gd',      nome : 'gadolinio',   periodo : 9,  gruppo :11, peso: 157.3,    numeroAtomico :64 },
        { simbolo : 'Tb',      nome : 'terbio',      periodo : 9,  gruppo :12, peso: 158.9,    numeroAtomico : 65},
        { simbolo : 'Dy',      nome : 'disprosio',   periodo : 9,  gruppo :13, peso: 162.5,    numeroAtomico : 66},
        { simbolo : 'Ho',      nome : 'olmio',       periodo : 9,  gruppo :14, peso: 164.9,    numeroAtomico : 67},
        { simbolo : 'Zr',    nome : 'zirconio',      periodo :  5, gruppo :4, peso: 91.22, numeroAtomico : 40},
        { simbolo : 'Dd',    nome : 'dubnio',        periodo :  7, gruppo :5, peso: 262, numeroAtomico : 105},
        { simbolo : 'Ubn',    nome : 'unbinilium',     periodo :  8, gruppo :2, peso: 320, numeroAtomico : 120},
        { simbolo : 'Uue',    nome : 'ununennium',     periodo :  8, gruppo :1, peso: 315, numeroAtomico : 119},
        { simbolo : 'Er',      nome : 'erbio',      periodo : 9,  gruppo :15, peso: 167.3,    numeroAtomico : 68},
        { simbolo : 'Tm',      nome : 'tulio',      periodo : 9,  gruppo :16, peso: 168.9,    numeroAtomico : 69},
        { simbolo : 'Yb',      nome : 'itterbio',     periodo :9,  gruppo :17, peso: 173,   numeroAtomico : 70},
        { simbolo : 'Ts',    nome : 'tennesso',     periodo :  7, gruppo :17, peso: 310, numeroAtomico : 117},
        { simbolo : 'Og',    nome : 'oganesson',     periodo :  7, gruppo :18, peso: 314, numeroAtomico : 118},
        { simbolo : 'Cn',    nome : 'copernicio',     periodo :  7, gruppo :12, peso: 285, numeroAtomico : 112},
        { simbolo : 'Th',      nome : 'torio',     periodo : 10,  gruppo :5, peso: 232,    numeroAtomico : 90},
        { simbolo : 'Pa',      nome : 'protoattinio',     periodo : 10,  gruppo :6, peso:231 ,    numeroAtomico : 91},
        { simbolo : 'Np',      nome : 'nettunio',     periodo : 10,  gruppo :8, peso:237 ,    numeroAtomico :93 },
        { simbolo : 'Pu',      nome : 'plutonio',     periodo :10 ,  gruppo :9, peso: 244,    numeroAtomico : 94},
        { simbolo : 'Am',      nome : 'americio',     periodo :10 ,  gruppo :10, peso: 243,    numeroAtomico :95 },
        { simbolo : 'Cm',      nome : 'curio',     periodo : 10,  gruppo :11, peso: 247,    numeroAtomico : 96},
        { simbolo : 'Bk',      nome : 'berkelio',     periodo : 10,  gruppo :12, peso: 247,    numeroAtomico : 97},
        { simbolo : 'Cf',      nome : 'californio',     periodo : 10,  gruppo :13, peso:251 ,    numeroAtomico : 98},
        { simbolo : 'Es',      nome : 'einstenio',     periodo : 10,  gruppo :14, peso: 252,    numeroAtomico : 99},
        { simbolo : 'Fm',      nome : 'fermio',     periodo : 10,  gruppo :15, peso: 257,    numeroAtomico : 100},
        { simbolo : 'Md',      nome : 'mendelevio',     periodo :10 ,  gruppo :16, peso: 258,    numeroAtomico :101 },
        { simbolo : 'No',      nome : 'nobelio',     periodo : 10,  gruppo :17, peso: 259,    numeroAtomico :102 }
        
    ]
    
    coloraElementi = () => {
        this.elementi.map(e => {
            if(e.numeroAtomico === 1 ){
                e.colore = 'green'
            }else if(e.numeroAtomico > 93 || e.numeroAtomico == 43 || e.numeroAtomico == 61){
                e.colore = 'grey'
            }else if(e.gruppo === 1){
                e.colore = '#FF6347'
            }else if(e.gruppo === 2){
                e.colore = '#FFA500'
            }else if(e.gruppo > 2 &&  e.gruppo < 13 && e.periodo < 8){
                e.colore = '#F0E68C'
            }else if(e.gruppo === 18 && e.periodo < 8){
                e.colore = '#87CEEB'
            }else if(e.gruppo === 17 && e.periodo < 8){
                e.colore = '#B0C4DE'
            }else if(e.periodo === 9){
                e.colore = '#ADFF2F'
            }else if(e.periodo === 10){
                e.colore = '#9ACD32'
            }else if(e.gruppo > 12 && e.gruppo <17){
                if([13,31,32,49,50,51,81,82,83,84,113,114,115,116].filter((r) =>{ return r == e.numeroAtomico}).length){
                    e.colore = '#9370DB'
                }else
                    e.colore = '#FFA07A'
            }
            
            return e;
        })
    }

    render(){
        this.coloraElementi();

        const nColonne = 18;
        const nRighe = 10;
        const tabella = [];
        for(let c=0; c < nColonne; c++){
            let riga = [];
            for (let r=0; r < nRighe; r++) {
                let elemento = null;
                const risultati = this.elementi.filter((e)=>{return e.periodo === r+1 && e.gruppo === c+1});
                if(risultati && risultati.length > 0)
                    elemento = risultati[0];
                riga.push( (<Elemento key={r+' '+c} dati={elemento}/>) )
            }
            tabella.push( (<View key={'c'+c} style={styles.righe}>{riga}</View>) );
        }

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