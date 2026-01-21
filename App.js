import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import Laskin from './laskin';
import Arvaus from './arvaus';

export default function App() {

const [message, setMessage] = useState('');
const [currentScreen, setCurrentScreen] = useState('home');

const handlePress = () => {
  Alert.alert('You typed:', message);
}

  return (
    <View style={styles.container}>
      {currentScreen === 'home' ? (
        <>
          <TextInput
            placeholder='Enter some text'
            onChangeText={text => setMessage(text)} 
            value={message}
            keyboardType='default' 
          />
          <Button onPress={handlePress} title="Press me" />
          <Image
            style={{ width:250, height: 250, marginTop: 20 }}
            source={require('./assets/seagull-7282992_1920.png')} 
          />
          <Button onPress={() => setCurrentScreen('laskin')} title="Laskin" />
          <Button onPress={() => setCurrentScreen('arvaus')} title="Arvaus" />
        </>
      ) : currentScreen === 'laskin' ? (
        <>
          <Laskin />
          <Button onPress={() => setCurrentScreen('home')} title="Home" />
        </>
      ) : (
        <>
          <Arvaus />
          <Button onPress={() => setCurrentScreen('home')} title="Home" />
        </>
      )}
      <StatusBar style="auto" />
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
