import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/publics/redux/store';


import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import CreatePokemon from './src/screens/CreatePokemon';
import EditPokemon from './src/screens/EditPokemon';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

// const AppSwitch = createSwitchNavigator({
//   Splash: SplashScreen
// })

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: null
    }
  },
  CreatePokemon: {
    screen: CreatePokemon,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
  EditPokemon: {
    screen: EditPokemon,
    navigationOptions: {
      header: null
    }
  },
}, {
    initialRouteName: 'Home'
  })

const AppContainer = createAppContainer(AppStack)