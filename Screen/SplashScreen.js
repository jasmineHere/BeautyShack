// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Button} from 'react-native';


const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation

  return (
    <View style={styles.container}>
      
            <Button title='Skip Splash' onPress={navigation.replace('Auth')}/>
      <ActivityIndicator
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008080',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
