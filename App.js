import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

const [message, setMessage] = useState('');

const handlePress = () => {
  Alert.alert('You typed:', message);
}

  return (
    <View style={styles.container}>
<TextInput
  placeholder='Enter some text'
  onChangeText={text => setMessage(text)} 
  value={message}
  keyboardType='default' 
/>
      <Button onPress={handlePress} title="Press me" />
      <StatusBar style="auto" />
      <Image
  style={{ width:250, height: 250, marginTop: 20 }}
  source={require('./assets/seagull-7282992_1920.png')} 
/>
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
});
