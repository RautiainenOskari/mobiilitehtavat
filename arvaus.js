import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function Laskin() {
  const [guess, setGuess] = useState("");
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const answer = () => {
    console.log(number);
    if (Number(guess) < 1 || Number(guess) > 100) {
      Alert.alert("Please enter a number between 1 and 100");
    }
    else if (Number(guess) === number) {
      setNumber(Math.floor(Math.random() * 100) + 1);
      Alert.alert("Correct!");
    } else if (Number(guess) < number) {
      Alert.alert("Too low!");
    } else {
      Alert.alert("Too high!");
    }
    setGuess("");
  };

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput
        placeholder="Add number"
        onChangeText={(guess) => setGuess(guess)}
        value={guess}
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: "gray", marginVertical: 10 }}
      />

      <View style={styles.buttonRow}>
        <Button onPress={answer} title="Make Guess" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 20,
  },
});
