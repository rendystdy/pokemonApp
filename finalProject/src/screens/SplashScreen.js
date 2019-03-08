import React, { Component } from 'react';
import { View, Image, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

class SplashScreen extends Component {

   componentDidMount() {
      setTimeout(
         () => {
            this.props.navigation.navigate('Home')
         },
         2000
      )
   }

   render() {
      return (
         <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: '#ddd' }}>
               <StatusBar
                  barStyle="light-content"
                  backgroundColor="#ddd"
               />
            </SafeAreaView>
            <Image resizeMode="contain" style={styles.logo} source={require('../../assets/logo-pokemon.png')} />
         </View>
      );
   }
}

export default SplashScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ddd'
   },
   logo: {
      height: 300,
      width: 300
   }
})