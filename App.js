import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
import Navigator2 from './routes/drawer';
import { StyleSheet, View} from 'react-native';

import * as firebase from "firebase";

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});


var firebaseConfig = {
  apiKey: "AIzaSyCZCAOol0b29XvRSKFlns6SFSVeHAEonm4",
  authDomain: "todo-d4372.firebaseapp.com",
  databaseURL: "https://todo-d4372.firebaseio.com",
  projectId: "todo-d4372",
  storageBucket: "todo-d4372.appspot.com",
  messagingSenderId: "902648881580",
  appId: "1:902648881580:web:b9d462b6a7d0e835725a09",
  measurementId: "G-3LNV1V5E5E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*firebase.analytics();*/


/*
firebase.initializeApp({
  apiKey: "AIzaSyCZCAOol0b29XvRSKFlns6SFSVeHAEonm4",
  authDomain: "todo-d4372.firebaseapp.com",
  projectId: "todo-d4372"
});
*/
//var db = firebase.firestore(); new



//const firebase1 = require("firebase");  new
// Required for side-effects
//const firebase2 = require("firebase/firestore");  new //***********************************   error  */
console.log("enter???");
/*
db.collection("todo").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().titl}`);
  });
});
*/

/*
db.collection("todo").where("title", "<", true)
    .get()
    .then(function(querySnapshot) {
     
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
           
            console.log(doc.id, " => ", doc.data());
             console.log("tst");
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
   */
//-------------------

  

//*********************************************************************************** */
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  
  const[isAuthenticated,setIsAuthenticated]=useState(false)

  useEffect(  ()=>{

    firebase.auth().onAuthStateChanged(
      function(user){
      setIsAuthenticated(!!user)
    }
    )  

  },[] )   
   



  if (fontsLoaded) {
    if(isAuthenticated){
      return (
        <Navigator2 />
       /* {(isAuthenticated) ? <Navigator2/>:<Navigator/>}*/ 
        
      );

    }
    else{
      return(
      <Navigator />
      );
    }
   
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}