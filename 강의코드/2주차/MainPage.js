import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import data from '../data.json';


export default function MainPage() {
  let tip = data.tip;
  return(
    <ScrollView style={styles.container}>

          <Text style={styles.title}>나만의 꿀팁</Text>
          <Image
            source={require('sparta-myhoneytip-ddaezi/assets/main.png')}
            style={styles.imageMain}
            />
        <ScrollView style={styles.scroll} horizontal indicatorStyle={"white"}>
          <TouchableOpacity style={styles.btn01}><Text style={styles.buttonText}>생활</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn02}><Text style={styles.buttonText}>재테크 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn03}><Text style={styles.buttonText}>반려견 </Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn04}><Text style={styles.buttonText}>꿀팁 찜 </Text></TouchableOpacity>
        </ScrollView>
        <View style={styles.cardContainer}>
          {/* <View style={styles.card}>
            <Image style={styles.cardImage} source={require('sparta-myhoneytip-ddaezi/assets/pizza.png')}/>
            <View style={styles.cardText}>
             <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
              <Text style={styles.cardDesc} numberOfLines={3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
             <Text style={styles.cardDate}>2020.09.09</Text>
            </View> */
            tip.map((content,i)=>{
              return (<View style={styles.card} key={i}>
                <Image style={styles.cardImage} source={{uri:content.image}}/>
                <View style={styles.cardText}>
                  <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                  <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                  <Text style={styles.cardDate}>{content.date}</Text>
                </View>
              </View>)})}
        
          </View>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginLeft:20,
    marginRight:20,
    marginTop:60
  },
  title: {
    marginBottom:12,
    fontWeight:"bold",
    fontSize:26
  },
  imageMain:{
    width:'100%',
    height:200,
    borderRadius:12,
    marginBottom:12
  },
  buttonText:{
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center'
  },
  btn01 :{
    width:60,
    height:30,
    padding:7,
    backgroundColor:"pink",
    borderRadius:15,
    margin:1
  },
  btn02 :{
    width:60,
    height:30,
    padding:7,
    backgroundColor:"#fefeaa",
    borderRadius:15,
    margin:1
  },
  btn03 :{
    width:60,
    height:30,
    padding:7,
    backgroundColor:"#fefe",
    borderRadius:15,
    margin:1
  },
  btn04 :{
    width:60,
    height:30,
    padding:7,
    backgroundColor:"#fafe",
    borderRadius:15,
    margin:1
  },
  cardContainer: {
    marginTop:12
  },
  card:{
    flex:1,
    flexDirection:"row",
    marginBottom:12
  },
  cardImage:{
    flex:1,
    width:100,
    height:100,
    borderRadius:15,
  },
  cardText:{
    flex:2,
    marginLeft:10
  },
  cardTitle:{
    fontSize:20,
    fontWeight:"bold"
  },
  cardDesc:{
    fontSize:15,
    padding:2
  },
  cardDate:{
    fontSize:12,
    color:'gray',
    padding:3
  }
});

