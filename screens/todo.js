import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput,Button,TouchableOpacity,Keyboard,FlatList, Alert, ActivityIndicator, RefreshControl} from 'react-native';
import { globalStyles } from '../styles/global';
import * as firebase from "firebase";
import 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';
import AddTodo from './addTodo';
import { CheckBox } from 'react-native-elements'


export default function todo({ navigation }) {
  const [todos, setTodos] = useState([])
  const [load, setload] = useState(true)
  //const [load2, setload2] = useState(true)
  const db = firebase.firestore();
  const usersRef = db.collection('todo').doc(firebase.auth().currentUser.uid)
  
  if(load ){
    data();
     /* usersRef.get().then((docSnapshot) => {

        if (docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            // do stuff with the data
          console.log(doc.data().name,"in",load)
        await   setTodos(doc.data().name);
          
          });
        } else {
       //   usersRef.set({name:todos})
       console.log("creat empty")
          usersRef.set({name:[]})  // create the document
        }
        
    });
    setload(false);
    console.log("in the if")*/
  }
  

 
 


const pressHandler = (key) => {//--------------Delete todo
  setTodos(prevTodos => {
    return prevTodos.filter(todo => todo.key != key);
  });
  changee()
};

const submitHandler = (text) => {//----------------------------- add todo
  if(text.length > 3){
    setTodos(prevTodos => {
      return [
        { text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
    console.log(todos,"what i have"); 
    changee()
  
  } else {
    Alert.alert('OOPS', 'Todo must be over 3 characters long', [
      {text: 'Understood', onPress: () => console.log('alert closed') }
    ]);
  

  } 
  
  //changee()
};

 async function changee(){

  await usersRef.set({name:todos})
  console.log("in")

/*
  await db.collection("todo").doc(firebase.auth().currentUser.uid).set({name:todos})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
*/

}


function refresh(){
 
  setload(true)
   //setload2(true)
}

  async function logout() {//***************** log out
    
    try {
      await firebase.auth().signOut();
  //    navigation.navigate('Home')     
    } catch (error) {
      console.log(error);
    }
  }

  async function data() {//***************** log out
    
    try {
     await  usersRef.get().then((docSnapshot) => {

        if (docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            // do stuff with the data
          console.log(doc.data().name,"in",load)
           setTodos(doc.data().name);
          
          });
        } else {
       //   usersRef.set({name:todos})
       console.log("creat empty")
          usersRef.set({name:[]})  // create the document
        }
        
    });
    setload(false);
    console.log("in the if")
      
    } catch (error) {
      console.log(error);
    }
  }



 
  //----------------------------------------------render
if(load/*||load2*/ ){

    return(
      <View style={styles.containerr}>
      <ActivityIndicator/>
      </View>
    );
  
}
else{
    return (
 /* <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
    console.log('dismissed');
  }}>*/
      
    <View style={styles.container}>
      
     
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
                           
      <View style={styles.item}>
         
          <MaterialIcons name='delete' size={18} color='#333' onPress={() => pressHandler(item.key)} />
          <TouchableOpacity  onPress={() => navigation.navigate('change',{title: item.text,ky:item.key})}>
          <Text style={styles.itemText}>{item.text}</Text>
         
          </TouchableOpacity>
          <CheckBox  style={{ padding: 0}} checked={false} />
      </View>
            )}
          />
        </View>
        <View style={{paddingTop:10}} />
      <Button  title={"refresh"}  onPress={ refresh /*setload(true)*/ } />
      </View>
    </View>
  //</TouchableWithoutFeedback>
            );
            }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
content: {
  padding: 40,
  flex: 1,
},
list: {
  marginTop: 20,
  flex: 1,
},
item: {
  padding: 5,
  marginTop: 5,
  borderColor: '#bbb',
  borderWidth: 1,
  borderStyle: "dashed",
  borderRadius: 1,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
},
itemText: {
  marginLeft: 20,
  marginRight: 20,
},
containerr: {
  flex: 1,
  padding:100 ,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "flex-start"
},
});


/*

var kk= navigation.getParam('k')
 
  var cc= navigation.getParam('chng')
  
  var [kky, setkky] = useState(kk)
  var [ccy, setccy] = useState( cc)
  
  console.log("----------",kky)
  if(kk){
    var temp = [{text:"zdf",key:"56"}]
    console.log(todos.length,cc,kk)
     for(var i=0;i<todos.length;i++){
        if(todos[i].key===kk){
        temp[i].text=cc;
        temp[i].key=kk;

        }
        else{
          temp[i].text=todos[i].text;
          temp[i].key=todos[i].key;

        }
     }
   setTodos(temp);
   setkky(undefined);
   kk=undefined;
  }
*/ 