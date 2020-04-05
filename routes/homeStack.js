import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/login';
import ReviewDetails from '../screens/signup';
import about from '../screens/forgot';
import todo from '../screens/todo';
import change from '../screens/change';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'login',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'signup',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },

  about: {
    screen: about,
    navigationOptions: {
      title: 'forget password',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  todo: {
    screen: todo,
    navigationOptions: {
      title: 'todo',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },

  change: {
    screen: change,
    navigationOptions: {
      title: 'change',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  
  



};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#FFA500', height:  60},
    headerLeft: null,

  }
});

export default createAppContainer(HomeStack);


