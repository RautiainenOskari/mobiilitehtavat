
import { StyleSheet, Text, View, TextInput, Button,} from 'react-native';
import { useState } from 'react';

export default function Arvaus() {

    const [tulos, setTulos] = useState("");
    const [luku1, setLuku1] = useState("");
    const [luku2, setLuku2] = useState("");

    const summa = () => {
        const summa = Number(luku1) + Number(luku2);
        setTulos(summa.toString());
        setLuku1("");
        setLuku2("");
    };

    const vahennys = () => {
        const summa = Number(luku1) - Number(luku2);
        setTulos(summa.toString());
        setLuku1("");
        setLuku2("");
    };

  return (
    <View style={styles.container}>
      <Text>Result: {tulos}</Text>
      <TextInput
  placeholder='Add number'
  onChangeText={luku1 => setLuku1(luku1)} 
  value={luku1}
  keyboardType='numeric'
  style={{ borderWidth: 1, borderColor: 'gray', marginVertical: 10 }}
  
/>
<TextInput
  placeholder='Add number'
  onChangeText={luku2 => setLuku2(luku2)} 
  value={luku2} 
  keyboardType='numeric'
  style={{ borderWidth: 1, borderColor: 'gray', marginVertical: 10 }}
/>

<View style={styles.buttonRow}>
  <Button onPress={summa} title="+" />
  <Button onPress={vahennys} title="-" />
</View>
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
  buttonRow: {
  flexDirection: 'row',
  gap: 20,
}
});
