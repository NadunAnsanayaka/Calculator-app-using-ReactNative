import React from "react";
import { View } from "react-native";
import MemoryButton from "./MemoryButton";
import styles from "./styles";

const MemoryButtons = ({onBackspacePress, onMemoryStore, onMemoryRecall, onMemoryClear }) => (
  <View style={styles.memoryButtonsContainer}>
    <MemoryButton label="⌫" onPress={onBackspacePress} />
    <MemoryButton label="MS" onPress={onMemoryStore} />
    <MemoryButton label="MR" onPress={onMemoryRecall} />
    <MemoryButton label="MC" onPress={onMemoryClear} />
  </View>
);

export default MemoryButtons;
