import React, { useState } from 'react';
import { StyleSheet, View, Text,Alert, TextInput,Button,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { NavigationActions} from 'react-navigation';
import * as firebase from "firebase";

export default function Home({ navigation }) {

  
const [chng,setchng]= useState(navigation.getParam('title'));
//var x = navigation.getParam('title');
console.log(navigation.getParam('title'),navigation.getParam('ky'));
//setchng( navigation.getParam('mail'));
 var x = navigation.getParam('ky')

  return (
  //  <TouchableWithoutFeedback onPress={()=> {console.log("hi"); Keyboard.dismiss()}}>
    <View style={globalStyles.modalContainer}>

    <Text> change </Text>

    <View style={{paddingTop:10}} />

      <TextInput style={  {width:200 , height:40 , borderWidth: 1,} }
        value={chng}
        /*keyboardType='email-address'
        placeholder='email' 
        autoCapitalize="none"*/
        onChangeText={ (text)=>{setchng(text)} } />

        <View style={{paddingTop:10}} />

     
      <Button  title={"make changes"}  color="green" onPress={() => navigation.navigate('todo',{chng:chng,k:x})} />
     

    </View>
    //</TouchableWithoutFeedback>
  );
}