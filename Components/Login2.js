import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login2 = () => {
  return (
    <View style={{backgroundColor:'black', height:'100%', justifyContent:'space-around'}}>
    <View style={styles.upperPart}>
    <Text style={{color:'white', fontSize:35, fontWeight:'bold', paddingLeft:20, marginTop:20}}>Welcome Back!</Text>
    </View>
    <View style={{marginHorizontal:10}}>
    <TextInput
        placeholder="Enter Email"
        placeholderTextColor='white'
        style={styles.input}
      />
    <TextInput
        placeholder="Password"
        placeholderTextColor='white'
        style={styles.input}
        type='password'
      />
      <Text style={{color:'#ff893b', textAlign:'right', marginRight:20}}>Forget Password?</Text>
    </View>

    <View>
    <TouchableOpacity style={{alignItems:'center'}}>
      <Text style={{color:'white', textAlign:'center' ,fontSize:20, fontWeight:'bold', backgroundColor:'#ff893b', width:'80%',borderRadius:10, padding:5 }}>Login</Text>
    </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row',justifyContent:'center'}}>
      <Text style={{color:'white', textAlign:'center'}}>Don't Have Account? </Text>
      <Text style={{color:'#ff893b', textAlign:'center'}}>Sign Up</Text>
    </View>

  </View>

  )
}


const styles = StyleSheet.create({
    input: {
      margin: 12,
      borderBottomWidth: 1,
      padding:0,
      borderColor: 'white',
      color:'white'
    },
    upperPart:{
        backgroundColor:'#39424b',
        height:'30%',
        borderBottomRightRadius:20,
        borderBottomEndRadius:950
    }
   
  });

  
export default Login2