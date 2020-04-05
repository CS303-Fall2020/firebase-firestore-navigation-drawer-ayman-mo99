import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import todo from '../screens/todo';
import change from '../screens/change';

 /*async*/ function logout() {//***************** log out
    
   // try {
     // await firebase.auth().signOut();
     navigation.navigate('Home')     
     //} catch (error) {
       console.log("hi");
    // }
   }


const screens = {
  todo: {
    screen: todo,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Todolist' navigation={navigation} logout={logout} />
      }
    },
  },
  
  change: {
    screen: change,
    navigationOptions: {
      title: 'change',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#FFA500', height: 60 },
  }
});

export default AboutStack;