import { useState } from 'react';
import React from 'react';
import { View, Text, Button } from 'react-native';
const App = () => {
  const [count, setCount] = useState(0);
const countNumber = () => {
  setCount(count + 1);
}
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center' }}>
      <Text style={{alignContent:"center", justifyContent:'center', fontSize: 90, color:'blue'}}>
{count}
      </Text>
      <Button onPress={countNumber} title='click on me'></Button>
    </View>
  );
}
export default App;