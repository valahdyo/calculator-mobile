import { StyleSheet, Text, View } from "react-native"

export default function CalcDisplay({ lastNumber, displayNumber }) {
  return (
    <View style={styles.results}>
      <Text style={styles.historyText}>{lastNumber}</Text>
      <Text style={styles.resultText}>{displayNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  results: {
    backgroundColor: "#fff",
    minHeight: "20%",
    alignItems: "flex-end",
    borderRadius: 10,
    justifyContent: "flex-end",
    marginVertical: 25,
  },
  resultText: {
    maxHeight: 45,
    color: "#FF6666",
    margin: 15,
    fontSize: 35,
  },
  historyText: {
    color: "#7c7c7c",
    fontSize: 20,
    marginRight: 10,
    alignSelf: "flex-end",
  },
})
