
import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground, TouchableHighlight,Platform } from 'react-native';


export const isAndroid = () => Platform.OS === 'android';

import * as Google from 'expo-google-app-auth'
const Login=(props)=> {

  const SignInWithGoogle = async () => {
     return await Google.logInAsync({
              clientId: isAndroid() ? '242605181936-8h6mavod7qdrq9c5o7tlck9aonh38itf.apps.googleusercontent.com':false,
              scopes: ['profile', 'email'],
          })
        //   .then(data => console.log(data))
          .then(data=>props.navigation.push("Home",{data:data}))
          .catch(e=>console.log(e))
  }


      return (
          <View style={styles.container} >
            <ImageBackground source={require('../images/Mario.png')} style={styles.image}>
              <View style={{width:'50%',alignItems:'center',textAlign:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:30}}>mRio</Text>
              <Text style={{fontWeight:'bold'}}>JOIN WITH 10 MILLIONS PLAYER ENJOYED IN THE WORLD</Text>
              <TouchableHighlight style={styles.login}
                  onPress={SignInWithGoogle}
                  underlayColor='#fff' >
              <Text style={styles.loginstyleButton}>Login with Google</Text>
              </TouchableHighlight>    

              </View>
          
            </ImageBackground>
          </View>
        );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    
    flex: 1,
    resizeMode:'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  login:{
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
    borderTopRightRadius: 20,
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  loginstyleButton:{
    paddingTop:15,
    fontWeight:'bold',
    backgroundColor:'#e77063',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, 
    borderTopRightRadius: 20,
    textAlign:'center',
    alignItems: 'center',
    alignContent:'center',
    justifyContent:'center',
    height:50,
    width:200
  }

});



export default Login;
