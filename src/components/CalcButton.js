import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

export default function CalcButton({ handleInput }) {
  const buttons = [
    "C",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ]

  return (
    <View style={styles.buttons}>
      {buttons.map((btn) =>
        btn === "=" ||
        btn === "/" ||
        btn === "*" ||
        btn === "-" ||
        btn === "+" ? (
          <TouchableOpacity
            key={btn}
            style={[styles.button, { backgroundColor: "#FF6666" }]}
            onPress={() => handleInput(btn)}
          >
            <Text style={[styles.textButton, { color: "white" }]}>{btn}</Text>
          </TouchableOpacity>
        ) : btn === 0 ? (
          <TouchableOpacity
            key={btn}
            style={[
              styles.button,
              {
                backgroundColor: "#fff",
                minWidth: "45%",
              },
            ]}
            onPress={() => handleInput(btn)}
          >
            <Text style={styles.textButton}>{btn}</Text>
          </TouchableOpacity>
        ) : btn === "." || btn === "DEL" || btn == "%" ? (
          <TouchableOpacity
            key={btn}
            style={[
              styles.button,
              {
                backgroundColor: btn === "." ? "#fff" : "#ededed",
                maxWidth: "24%",
              },
            ]}
            onPress={() => handleInput(btn)}
          >
            <Text style={styles.textButton}>{btn}</Text>
          </TouchableOpacity>
        ) : btn === "C" ? (
          <TouchableOpacity
            key={btn}
            style={[
              styles.button,
              {
                backgroundColor: "#ededed",
              },
            ]}
            onPress={() => handleInput(btn)}
          >
            <Text style={styles.textButton}>{btn}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            key={btn}
            style={[
              styles.button,
              {
                backgroundColor: typeof btn === "number" && "#fff",
              },
            ]}
            onPress={() => handleInput(btn)}
          >
            <Text style={styles.textButton}>{btn}</Text>
          </TouchableOpacity>
        )
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    height: "35%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    borderColor: "#e5e5e5",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    justifyContent: "center",
    minWidth: "20%",
    minHeight: "35%",
    flex: 2,
  },
  textButton: {
    color: "#7c7c7c",
    fontSize: 28,
  },
})
