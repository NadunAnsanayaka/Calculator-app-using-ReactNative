import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

const HistorySection = ({ history, onHistoryClear }) => (
  <View style={styles.historyContainer}>
    <View style={styles.historyHeaderContainer}>
      <Text style={styles.historyHeaderText}>History:</Text>
      <TouchableOpacity
        style={styles.historyClearButton}
        onPress={onHistoryClear}
      >
        <Text style={styles.additionalButtonText}>HC</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.historyItems}>
    <ScrollView >
      {history.map((item, index) => (
        <Text key={index} style={styles.historyItem}>
          {item.input} = {item.result}
        </Text>
      ))}
    </ScrollView>
    </View>
  </View>
);

export default HistorySection;
