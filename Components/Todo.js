import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Todo = () => {
    const [input, setInput] = useState('');
    const [renderInput, setRenderInput] = useState([]);
    const onPress = () => {setRenderInput([...renderInput, {txt: input}])
    setInput('')
    };
  
    const onDelete = (index) =>{
      setRenderInput(renderInput.filter((e,i)=> index !== i))
    
    }
    const onEdit = (index) =>{
      setRenderInput(renderInput.map((e,i)=> {
        if(index === i){
          return{
            ...e,
            edit: e.edit? false : true
          }
        }
        else{
          return{
            ...e,
            edit: false
          }
        }
      }))
    }
  return (
    <View style={{backgroundColor:'white', height:'100%', justifyContent:'space-between'}}>
    <View>

      <View style={styles.imageCont}>
        <Image source={require('../Images/logo.png')} style={styles.imglogo} />
      </View>
      <View style={styles.todoInput}>
        <TextInput
          placeholder="Enter Todo"
          placeholderTextColor='black'
          style={styles.input}
          onChangeText={setInput}
          value={input}
        />
      </View>
      <View style={{alignItems: 'center'}}>
      {input.length>0 ? 
        <TouchableOpacity
          onPress={onPress}
          style={{
            padding: 2,
            backgroundColor: '#eee',
            borderRadius:10,
            alignItems: 'center',
            width: '50%',
          }}>
          <Text style={{color: '#0193cf', fontSize: 20, fontWeight: 'bold'}}>
            Add Your TODO
          </Text>
        </TouchableOpacity>
      :''}
      </View>
      <View style={{alignItems: 'center', color: 'white'}}>
        <View style={{marginTop: 20, width:'100%', padding:20, }}>
          {renderInput.map((e, i) => {
            return (
              <View key={i} style={{ flexDirection:'row', justifyContent:'space-between', width:'100%', marginTop:3}}>
                
                {e.edit? <TextInput placeholder='enter Edit Value' style={{padding:0, color:'black'}} placeholderTextColor='black' onChangeText={(events)=>{
                  setRenderInput(renderInput.map((edit,index)=>{
                    if(index==i){
                      return {
                        ...edit,
                        txt:events
                      }
                    }
                    else{
                        return edit
                    }
                  }))
                }}/> :<Text style={{width:'50%', color:'black'}}>
                  {i + 1}. {e.txt}
                </Text>
              }
                  <TouchableOpacity
                  onPress={()=>onEdit(i)}
                    style={{
                      padding: 2,
                      alignItems: 'center',
                      width: '20%',
                    }}>
                    <Text style={{color: '#0193cf'}}>{e.edit? 'save' : 'edit'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>onDelete(i)}
                    style={{
                      padding: 2,
                      alignItems: 'center',
                      width: '20%',
                    }}>
                    <Text style={{color: '#0193cf'}}>Delete</Text>
                  </TouchableOpacity>
               
              </View>
            );
          })}
        </View>
      </View>
    </View>
      <View style={{alignItems:'center', marginBottom:10}}>
          <Text style={{color:'grey', }}>Created By: Mubashir</Text>
      </View>
    </View>
  )

}
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    input: {
      margin: 12,
      borderBottomWidth: 1,
      padding:0,
      borderColor: 'black',
      color:'black'
    },
    todoInput: {
      marginTop: 50,
      color:'black',
      borderColor:'black',
    },
    imglogo: {
      width: 300,
      height: 50,
    },
    imageCont: {
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
  });

export default Todo;