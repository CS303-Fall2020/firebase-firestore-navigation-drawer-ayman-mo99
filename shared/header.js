import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as firebase from "firebase";
import 'firebase/firestore';

export default function Header({ title, navigation,logout }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  /*async*/ function logout1() {//***************** log out
    
    try {
      /*await*/ firebase.auth().signOut();
  //    navigation.navigate('Home')     
    } catch (error) {
      console.log("hi");
   }
  }
//  <Button  title={"signup"}  onPress={ openMenu } />
  return (
    <View style={styles.header}>
      <View style={ {marginRight:100,marginBottom:30}}>
      <MaterialIcons name='menu' size={30} onPress={openMenu} style={styles.icon} />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      
      </View>
      <View style={ {marginLeft:50,marginBottom:0}}>
      <Button  title={"log out"}  onPress={ logout1 } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
  //  left: 100,
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFA500',
    letterSpacing: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //marginLeft:100
  },
  icon: {
    position: 'absolute',
    left: 10,
    //marginRight:500,
  }
});