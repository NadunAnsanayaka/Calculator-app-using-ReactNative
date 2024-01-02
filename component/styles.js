import { StyleSheet } from "react-native";

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
    marginTop: 15,
    marginBottom:5,
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
    flex: 5,
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
  memoryButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 2,
  },
  memoryButton: {
    width: "24%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 15,
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
    flex: 1,
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
    flex: 2,
  },
  historyItems: {
    paddingHorizontal: 10,
    flex: 1.5,
    marginBottom:2,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default styles;
