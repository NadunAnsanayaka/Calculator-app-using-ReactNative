import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const CalculatorButtons = ({ onButtonPress }) => (
  <View style={styles.buttonContainer}>
    {[
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "0",
      "+",
      "C",
      "=",
      ".",
    ].map((item, index) => (
      <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={() => onButtonPress(item)}
      >
        <Text style={styles.buttonText}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default CalculatorButtons;
