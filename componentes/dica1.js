import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function dica1(){
    return(
        <SafeAreaView style={estilo.container}>
            <ScrollView>
            <View style={estilo.principal}>
                <Text style={estilo.titulo}>Dica 1</Text>
                <Text style={estilo.subtitulo}>Levanta Alan</Text>
            </View>
            <View style={estilo.principal1}>
                <Text style={estilo.textoPrincipal}>“Acorda Alan” é um jogo de ação e suspense psicológico que segue a jornada de um escritor chamado Alan Wake,
                     agora renomeado. Ele viaja para uma cidade isolada chamada Bright Falls para encontrar inspiração para seu novo livro.
                      Porém, ao chegar lá, Alan começa a vivenciar eventos estranhos e aterrorizantes, como se sua própria história estivesse se tornando realidade.
                    Enquanto tenta desvendar o mistério, Alan se vê perseguido por uma força sombria que controla as pessoas da cidade, transformando-as em inimigos perigosos.
                     A trama mistura elementos de horror, suspense e mistério, com Alan tentando recuperar sua esposa desaparecida, enquanto enfrenta criaturas e tenta entender
                      o que está acontecendo com a sua própria mente. O jogo combina exploração, combate e uma narrativa profunda que se desenrola por meio de episódios, criando 
                      uma experiência imersiva e cheia de tensão.
                </Text>
                <View style={estilo.imgDiv}>
                    <Image resizeMode='contain' style={estilo.img} source={require('../assets/AcordaAlan.jpg')}></Image>
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
        backgroundColor:'#add8e6',
        padding:10,
        marginBottom:20,
    },
    principal1:{
        marginTop:40,
        alignItems:'center',
        backgroundColor:'#add8e6',
        padding:10,
        marginBottom:20,
        marginLeft:15,
        marginRight:15,
        borderRadius:10
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