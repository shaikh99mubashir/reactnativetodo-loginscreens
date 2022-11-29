import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'

const Login3 = () => {
  return (
    <View style={{backgroundColor:'white', height:'100%', justifyContent:'space-around'}}>
      <View style={{alignItems:'center'}}>
      <Image source={require('../Images/logo.png')} style={styles.imglogo} />
      </View>
      <View style={{marginHorizontal:10}}>
      <TextInput
          placeholder="Enter Email"
          placeholderTextColor='black'
          style={styles.input}
        />
      <TextInput
          placeholder="Password"
          placeholderTextColor='black'
          style={styles.input}
          type='password'
        />
      </View>

      <View>
      <TouchableOpacity style={{alignItems:'center'}}>
        <Text style={{color:'white', textAlign:'center', fontSize:20, fontWeight:'bold', backgroundColor:'#0193cf', width:'40%',borderRadius:10, padding:5 }}>Login</Text>
        <Text style={{color:'black', textAlign:'center',marginTop:10}}>Forget Password?</Text>
      </TouchableOpacity>
      </View>

      <View>
        <Text style={{color:'black', textAlign:'center'}}></Text>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderBottomWidth: 1,
    padding:0,
    borderColor: 'black',
    color:'black'
  },
  imglogo: {
    width: 300,
    height: 50,
  },
});


export default Login3