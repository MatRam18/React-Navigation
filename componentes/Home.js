import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function Home(props) {
    return(
        <SafeAreaView style={estilo.container}>
            <View style={estilo.principal}>
                <Text style={estilo.titulo}>Mundo do Jogos</Text>
                <Text style={estilo.subtitulo}>Jogos pra jogar</Text>
            </View>
            <View>
                <TouchableOpacity style={estilo.Button} onPress={()=>{props.navigation.navigate('dica1')}}>
                    |<Text style={estilo.TextButton}>Dica 1 - Levanta Alan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilo.Button} onPress={()=>{props.navigation.navigate('dica2')}}>
                |   <Text style={estilo.TextButton}>Dica 2 - bom de guerra</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

const estilo = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    principal:{
        alignItems:'center',
        marginBottom:50,
        borderWidth:2,
        padding:10,
        backgroundColor:'#C2FFB2'
    },
    titulo:{
        fontSize:40,

    },
    subtitulo:{
        fontSize:15,
    },
    Button:{
        margin:10,
        padding:5,
        backgroundColor:'#add8e6',
        borderRadius:5,
        alignItems:'center'
    },
    TextButton:{
        fontSize:20,
    },
})