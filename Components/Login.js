import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = () => {
  return (
    <View style={{backgroundColor:'black', height:'100%', justifyContent:'space-around'}}>
      <View>
      <Text style={{color:'white', fontSize:35, fontWeight:'bold', paddingLeft:20, marginTop:20}}>Hello there,</Text>
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
      </View>

      <View>
      <TouchableOpacity style={{alignItems:'center'}}>
        <Text style={{color:'white', textAlign:'center', fontSize:20, fontWeight:'bold', backgroundColor:'#7e809d', width:'40%',borderRadius:10, padding:5 }}>Login</Text>
        <Text style={{color:'white', textAlign:'center',marginTop:10}}>Forget Password?</Text>
      </TouchableOpacity>
      </View>

      <View>
        <Text style={{color:'white', textAlign:'center'}}>Sponsered</Text>
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
 
});


export default Login