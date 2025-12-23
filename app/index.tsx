import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? dark : light;


  const press = (val) => setInput((prev) => prev + val);


 
  const clear = () => setInput("");


  const erase = () => setInput((prev) => prev.slice(0, -1));

  
  const calculate = () => {
    try {
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    ["1", "2", "3", "🧹"],
    ["4", "5", "6", "×"],
    ["7", "8", "9", "-"],
    ["0", "/", ".", "+"],
  ];

  return (
    <View style={[styles.screen, { backgroundColor: theme.bg }]}>
   <StatusBar barStyle="light-content" />


   <View style={styles.toggleRow}>
  <TouchableOpacity onPress={() => setIsDark(!isDark)}>
    <Text
      style={{
        fontSize: 18,
        color: isDark ? "#111111" : "#ff8fab", 
      }}
    >
      🎀
    </Text>
  </TouchableOpacity>
</View>


      
      <View style={[styles.display, { backgroundColor: theme.display }]}>
        <Text style={[styles.displayText, { color: theme.result }]}>
          {input ||"_"}
        </Text>
      </View>

      
      <View style={styles.keypad}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      btn === "+" ||
                      btn === "-" ||
                      btn === "×" ||
                      btn === "🧹"
                        ? theme.operator
                        : theme.button,
                  },
                ]}
                onPress={() => {
                  if (btn === "🧹") erase();
                  else press(btn === "×" ? "*" : btn);
                }}
              >
                <Text style={[styles.buttonText, { color: theme.text }]}>
                  {btn}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.button,
              { flex: 1, backgroundColor: theme.clear },
            ]}
            onPress={clear}
          >
            <Text style={[styles.buttonText, { color: theme.clearText }]}>
              🗑️
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: theme.equal,
                marginLeft: 16,
              },
            ]}
            onPress={calculate}
          >
            <Text style={styles.equalText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//styling of calculator , Dark and light themes
const dark = {
  bg: "#0b0b0b",
  display: "#111",
  button: "#1c1c1c",
  operator: "#232323",
  clear: "#2a2a2a",
  equal: "#ffb4a2",
  text: "#e5e5e5",
  clearText: "#ff6b6b",
  result: "#ffffff",
};

const light = {
  bg: "#fdecef",
  display: "#f8d7dd",
  button: "#f8d7dd",
  operator: "#f4b6c2",
  clear: "#f1a7b8",
  equal: "#ff8fab",
  text: "#3a0f1c",
  clearText: "#7a1025",
  result: "#7a1025",
};

/* STYLES */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    borderRadius: 0,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  display: {
    height: 150,
    borderRadius: 36,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    marginBottom: 30,
    color:"#f8d7dd",
  },
  displayText: {
    fontSize: 52,
  },
  keypad: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  
   
    elevation: 6, 
  
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  
  buttonText: {
    fontSize: 26,
    fontWeight: "500",   
    color: "#000",
    letterSpacing: 0.3,  
  },
  
  equalText: {
    fontSize: 28,       
    fontWeight: "900",   
    color: "#000",
  },
})
