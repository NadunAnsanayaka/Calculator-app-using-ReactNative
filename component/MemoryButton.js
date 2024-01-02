import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const MemoryButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.memoryButton} onPress={onPress}>
    <Text style={styles.additionalButtonText}>{label}</Text>
  </TouchableOpacity>
);

export default MemoryButton;
