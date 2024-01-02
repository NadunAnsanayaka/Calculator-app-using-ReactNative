import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const CalculatorDisplay = ({ result, input, onInputChange  }) => {
  
  const handleInputChange = (text) => {
    onInputChange(text);
  };

 return(
  <View style={styles.resultContainer}>
   
    <Text style={styles.resultText}>{result}</Text>
    <TextInput
      style={styles.inputText}
      value={input}
      onChangeText={handleInputChange}
      keyboardType="numeric"
    />
  </View>
)};
 
export default CalculatorDisplay;
