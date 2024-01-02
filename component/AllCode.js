import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";


export default function AdvancedCalculatorApp() {
  // State variables for input, result, memory, and history
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState([]);

  // Function to handle button presses
  const handleButtonPress = (value) => {
    if (value === "=") {
      try {
        // Evaluate input and update result and history
        const resultValue = eval(input);
        setResult(resultValue);
        setHistory([...history, { input, result: resultValue }]);
      } catch (error) {
        setResult("Invalid Input");
      }
    } else if (value === "C") {
      // Clear input and result
      setInput("");
      setResult("");
    } else {
      // Append value to the input
      setInput(input + value);
    }
  };

  // Function to handle backspace press
  const handleBackspacePress = () => {
    setInput(input.slice(0, -1));
  };

  // Function to store current input in memory
  const handleMemoryStore = () => {
    setMemory(eval(input));
  };

  // Function to clear the history
  const handleHistoryClear = () => {
    setHistory([]);
  };

  // Function to recall memory and append to input
  const handleMemoryRecall = () => {
    setInput(input + memory);
  };

  // Function to clear memory
  const handleMemoryClear = () => {
    setMemory(0);
  };

  // JSX structure for the calculator interface
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.mainContainer}>
        {/* Result display */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        {/* Input text field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={input}
            onChange={setInput}
            keyboardType="numeric"
          />
        </View>

        {/* Calculator buttons */}
        <View style={styles.buttonContainer}>
          {[
            "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-",
            "0", "+", "C", "=", "."
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleButtonPress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Additional buttons (Backspace, Memory Store/Recall/Clear) */}
        <View style={styles.additionalButtonsContainer}>
          <TouchableOpacity
            style={styles.additionalButton}
            onPress={handleBackspacePress}
          >
            <Text style={styles.additionalButtonText}>⌫</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.additionalButton}
            onPress={handleMemoryStore}
          >
            <Text style={styles.additionalButtonText}>MS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.additionalButton}
            onPress={handleMemoryRecall}
          >
            <Text style={styles.additionalButtonText}>MR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.additionalButton}
            onPress={handleMemoryClear}
          >
            <Text style={styles.additionalButtonText}>MC</Text>
          </TouchableOpacity>
        </View>

        {/* History header and clear button */}
        <View style={styles.historyHeaderContainer}>
          <Text style={styles.historyHeaderText}>History:</Text>
          <TouchableOpacity
            style={styles.historyClearButton}
            onPress={handleHistoryClear}
          >
            <Text style={styles.additionalButtonText}>HC</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Display history in a scrollable view */}
      <ScrollView style={styles.historyContainer}>
        {history.map((item, index) => (
          <Text key={index} style={styles.historyItem}>
            {item.input} = {item.result}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
  mainContainer: {
    flex: 5,
  },
  resultContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 5,
  },
  resultText: {
    fontSize: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  inputText: {
    fontSize: 30,
  },
  buttonContainer: {
    flex: 6,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    fontSize: 24,
    width: "24%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 2,
  },
  buttonText: {
    fontSize: 24,
  },
  additionalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 2,
  },
  additionalButton: {
    width: "24%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 15,
  },
  additionalButtonText: {
    fontSize: 18,
  },
  historyHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  historyHeaderText: {
    paddingHorizontal: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  historyClearButton: {
    width: "20%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 15,
    marginRight: 2,
  },
  historyContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
