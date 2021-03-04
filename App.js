import React , { useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [counter , setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{width :'100%' , alignItems:'flex-end' , marginRight : 25 , marginTop : 25 }}>
        <TouchableOpacity onPress={() => setCounter(0)}>
          <MaterialCommunityIcons name="restart" size={36} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{flex : 3 , justifyContent :"flex-end", paddingBottom :55}}>
        <Text style={ {fontSize : 100, color:"#263200"}}>{counter}</Text>
        <Text style={ {fontSize : 25, color:"#263200"}}>counter</Text>
      </View>
      <View style={{flex : 1 , width : "100%" , flexDirection: "row"}}>
        <View style={{flex : 1}}> 
          <TouchableOpacity style={{backgroundColor : "#263200" , flex : 1 , justifyContent : "center" , alignItems : 'center' , borderRightColor :"#C1EA37", borderWidth : 1}} onPress={() => setCounter(counter - 1)}>
            <Text style={{color : '#C1EA37' , fontSize: 40}}>-</Text>
            <Text style={{color : '#C1EA37' , fontSize: 20}}>-1</Text>
            
          </TouchableOpacity>
        </View>
        <View style={{flex : 1}}> 
          <TouchableOpacity style={{backgroundColor : "#263200" , flex : 1 , justifyContent : "center" , alignItems : 'center' }} onPress={() => setCounter(counter + 1)}>
            <Text style={{color : '#C1EA37' , fontSize: 40}}>+</Text>
            <Text style={{color : '#C1EA37' , fontSize: 20}}>+1</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1EA37',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
