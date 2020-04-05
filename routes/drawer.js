import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View , Button,TouchableOpacity} from 'react-native';
import * as firebase from "firebase";
import 'firebase/firestore';
// stacks
import todostack from './todostack';
import AboutStack from './aboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  todostack : {
    screen: todostack ,
  },
  profile: {
    screen: AboutStack,
  },//*********************************************** */
  x:{
    screen: AboutStack, 
    navigationOptions: {
        drawerLabel: () => (
        <TouchableOpacity>
            <Button
            title='SignOut'
            onPress={() => {
              firebase.auth().signOut();
            }}
            >
            </Button>
        </TouchableOpacity>
        )
        }
    }
    //--------------------------------------------------------------
});

export default createAppContainer(RootDrawerNavigator);