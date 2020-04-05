import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import prof from '../screens/prof';

const screens = {
  prof: {
    screen: prof,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='profile' navigation={navigation} />
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#FFA500', height: 60 },
  }
});

export default AboutStack;