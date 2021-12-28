import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';

export default function AboutPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>HI! 스파르타코딩 앱개발반에 오신것을 환영합니다
            </Text>
            <View style={styles.box}>
                <Image source={require('sparta-myhoneytip-ddaezi/assets/aboutImage.png')}
                 style={styles.aboutImage}/>
                 <Text style={styles.textOne}>
                    많은 내용을 간결하게 담아내려 노력했습니다!
                 </Text>
                 <Text style={styles.textTwo}>
                     꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다
                 </Text>
                 <TouchableOpacity style={styles.instabtn}>
                     <Text style={styles.btnText}>여러분의 인스타계정</Text>
                 </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#1F266A",
      marginTop:40,
      alignItems:'center'
    },
    title: {
        textAlign:'center',
        fontSize:34,
        fontWeight:'bold',
        paddingLeft:30,
        paddingTop:55,
        paddingRight:30,
        paddingBottom:20,
        color:'white'
    },
    box: {
        marginTop:20,
        width: '80%',
        height:'70%',
        backgroundColor:'white',
        borderRadius:40,
        alignItems:'center',
        // justifyContent:'center',
        padding:20
    },
    aboutImage: {
        marginTop:70,
        width:170,
        height:170,
        borderRadius:35,
    },
    textOne: {
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:10
    },
    textTwo: {
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        paddingTop:20,
        paddingBottom:20
    },
    instabtn: {
        backgroundColor:"orange",
        padding:15,
        borderRadius:15
    },
    btnText: {
        fontWeight:'bold',
        fontSize:15,
        color:'white'
    }
})