import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CalculatorScreen() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState("");
  const [isSecondValue, setIsSecondValue] = useState(false);

  const handlePress = (value) => {
    if (value === "AC") {
      setDisplayValue("0");
      setFirstValue("");
      setOperator(null);
      setIsSecondValue(false);
      return;
    }

    if (value === "+/-") {
      setDisplayValue((prevValue) =>
        prevValue.charAt(0) === "-" ? prevValue.substring(1) : "-" + prevValue
      );
      return;
    }

    if (value === "%") {
      setDisplayValue((prevValue) => (parseFloat(prevValue) / 100).toString());
      return;
    }

    if (value === "÷" || value === "×" || value === "-" || value === "+") {
      setOperator(value);
      setIsSecondValue(true);
      setFirstValue(displayValue);
      setDisplayValue("");
      return;
    }

    if (value === "=") {
      const result = calculate(firstValue, displayValue, operator);
      setDisplayValue(result.toString());
      setFirstValue(result.toString());
      setOperator(null);
      setIsSecondValue(false);
      return;
    }

    setDisplayValue((prevValue) =>
      prevValue === "0" || isSecondValue ? value : prevValue + value
    );
    if (isSecondValue) {
      setIsSecondValue(false);
    }
  };

  const calculate = (first, second, operator) => {
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);
    switch (operator) {
      case "÷":
        return firstNum / secondNum;
      case "×":
        return firstNum * secondNum;
      case "-":
        return firstNum - secondNum;
      case "+":
        return firstNum + secondNum;
      default:
        return secondNum;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("AC")}
        >
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("+/-")}
        >
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("%")}
        >
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOrange}
          onPress={() => handlePress("÷")}
        >
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOrange}
          onPress={() => handlePress("×")}
        >
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOrange}
          onPress={() => handlePress("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOrange}
          onPress={() => handlePress("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonZero}
          onPress={() => handlePress("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(".")}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOrange}
          onPress={() => handlePress("=")}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  display: {
    color: "white",
    fontSize: 72,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonZero: {
    backgroundColor: "#333",
    width: 170,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOrange: {
    backgroundColor: "#f09a36",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 32,
  },
});
