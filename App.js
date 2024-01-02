import React, { useState } from "react";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";
import CalculatorDisplay from "./component/CalculatorDisplay";
import CalculatorButtons from "./component/CalculatorButtons";
import MemoryButtons from "./component/MemoryButtons";
import HistorySection from "./component/HistorySection";
import styles from "./component/styles";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState([]);

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

  const handleInputChange = (text) => {
    setInput(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView   style={{flex:1}}>
      <CalculatorDisplay
        result={result}
        input={input}
        onInputChange={handleInputChange}
      />
      <CalculatorButtons onButtonPress={handleButtonPress} />
      <MemoryButtons
        onBackspacePress={handleBackspacePress}
        onMemoryStore={handleMemoryStore}
        onMemoryRecall={handleMemoryRecall}
        onMemoryClear={handleMemoryClear}
      />
      <HistorySection
        style={styles.historyContainer}
        history={history}
        onHistoryClear={handleHistoryClear}
      />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
