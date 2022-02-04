import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native"
import Icon from "react-native-vector-icons/Entypo"
import CalcButton from "../components/CalcButton"
import CalcDisplay from "../components/CalcDisplay"

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")
  const [displayNumber, setDisplayNumber] = useState("")

  const handleInput = (btnPressed) => {
    if (btnPressed === "%") {
      setCurrentNumber(currentNumber + "/100")
      setDisplayNumber(displayNumber + "%")
      return
    }

    switch (btnPressed) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1))
        setDisplayNumber(currentNumber.substring(0, currentNumber.length - 1))
        return
      case "C":
        setLastNumber("")
        setCurrentNumber("")
        setDisplayNumber("")
        return
      case "=":
        setLastNumber(displayNumber + "=")
        calculate()
        return
    }
    setCurrentNumber(currentNumber + btnPressed)
    setDisplayNumber(currentNumber + btnPressed)
  }

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1]
    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+" ||
      lastArr === "."
    ) {
      setCurrentNumber(currentNumber)
      setDisplayNumber(displayNumber)
    } else {
      console.log(currentNumber)
      let result = eval(currentNumber).toString()
      setCurrentNumber(result)
      setDisplayNumber(result)
      return
    }
  }

  return (
    <SafeAreaView
      style={{ padding: 10, backgroundColor: "#FFA0A0", height: "100%" }}
    >
      <CalcDisplay lastNumber={lastNumber} displayNumber={displayNumber} />
      <CalcButton handleInput={handleInput} />
    </SafeAreaView>
  )
}
