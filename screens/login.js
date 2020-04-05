import React, { useState } from 'react';
import { StyleSheet, View, Text,Alert, TextInput,Button,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { NavigationActions} from 'react-navigation';
import * as firebase from "firebase";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);
const [mail,setmail]= useState("");
const [pass,setpass]= useState("");
const [dat,setdat]= useState("");
var db = firebase.firestore();


/*
 db.collection("todo").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().titl}`);
      setdat(doc.data().titl);
      //console.log("wwwwwwwwwwwwwwwwwwwww");
  });
});
*/


//db.collection("todo").add({user:"ahmed", title:"batiks", suptitles:[]});
/*const ref = firestore().collection('todo');
ref.add({  title: todo,  complete: false,});
/*
  async function addTodo() {
    await ref.add({
      title: todo,
      complete: false,
    });
    
  }
*/


  async function login() {
   
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(mail, pass);

        console.log("Logged In!");

               
     //   navigation.navigate('todo',{mail:mail});
        setmail("");
        setpass("");
        // Navigate to the Home page

    } catch (error) {
        console.log(error.toString())
        console.log("error");
        Alert.alert(error.message);
    }

}

function siup(){
   var navAction = NavigationActions.reset({
     index:0,
     actions:[
      NavigationActions.navigate({routeName:"ReviewDetails"})
     ]
   });
navigation.dispatch(navAction);

}

  return (
//    <TouchableWithoutFeedback onPress={()=> {console.log("hi"); Keyboard.dismiss()}}>
    <View style={globalStyles.modalContainer}>

     

    <Text  > login {dat} </Text>
    <View style={{paddingTop:10}} />
      <TextInput style={  {width:200 , height:40 , borderWidth: 1,} }
      value={mail}
        keyboardType='email-address'
        placeholder='email' 
        autoCapitalize="none"
        onChangeText={ (text)=>{setmail(text)} } />
        <View style={{paddingTop:10}} />

      <TextInput style={ {width:200 , height:40 , borderWidth: 1} }
      value={pass}
        placeholder='password' 
        secureTextEntry={true}
        onChangeText={(text)=>{setpass(text)} } />
      
      <View style={{paddingTop:10}} />
      <Button  title={"login"}  onPress={ login } />

      <View style={{paddingTop:50}} />
      <Button  title={"signup"}  color="red" onPress={() => navigation.navigate('ReviewDetails')/*siup*/} />
      <View style={{paddingTop:10}} />
      <Button  title={"forget password"}  color="green" onPress={() => navigation.navigate('about')} />
     
     

    </View>
  //  </TouchableWithoutFeedback>
  );
}