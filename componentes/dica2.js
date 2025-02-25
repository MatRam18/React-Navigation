import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function dica1(){
    return(
        <SafeAreaView style={estilo.container}>
            <ScrollView>
            <View style={estilo.principal}>
                <Text style={estilo.titulo}>Dica 2</Text>
                <Text style={estilo.subtitulo}>O Bom de Guerra</Text>
            </View>
            <View style={estilo.principal1}>
                <Text style={estilo.textoPrincipal}>“Bom de Guerra” é um jogo de ação e aventura que segue a jornada de Kleiton, um guerreiro imbatível em busca de redenção.
                     Depois de anos enfrentando os deuses e criaturas do mundo antigo, Kleiton vive agora em um novo mundo, no reino da mitologia nórdica,
                      junto com seu filho, Atreus.
                    A história começa com a morte de Faye, a esposa de Kleiton, e a missão de espalhar suas cinzas no topo da maior montanha do reino. Durante a jornada,
                     Kleiton e Atreus enfrentam desafios e inimigos poderosos, incluindo deuses, gigantes e criaturas míticas. À medida que exploram esse novo mundo, Kleiton precisa 
                     ensinar a Atreus sobre a vida, a guerra e, ao mesmo tempo, controlar sua própria raiva e passado turbulento. Com um foco em combate visceral e uma narrativa
                      intensa, “Bom de Guerra” mergulha na relação entre pai e filho, enquanto Kleiton tenta quebrar o ciclo de violência e encontrar um novo propósito.
                       O jogo mistura exploração, quebra-cabeças e combate épico, tudo em um cenário vasto e detalhado, com uma história profundamente emocional.
                </Text>
                <View style={estilo.imgDiv}>
                    <Image resizeMode='contain' style={estilo.img} source={require('../assets/bomdeguerra.jpg')}></Image>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        ImageBackground: '#f6f6',
    },
    principal:{
        marginTop:40,
        alignItems:'center',
        backgroundColor:'#C52421',
        padding:10,
        marginBottom:20,
    },
    principal1:{
        marginTop:40,
        alignItems:'center',
        backgroundColor:'#C52421',
        padding:10,
        marginBottom:20,
        marginLeft:15,
        marginRight:15,
        borderRadius:10,
    },
    titulo:{
        fontSize:25,
    },
    subtitulo:{
        fontSize:18,
    },
    textoPrincipal:{
        fontSize:16,
        textAlign:'justify',
        padding:10,
    },
    img:{
        width:350,
        height:200
    },
    imgDiv:{
        alignItems:'center'
    },
});