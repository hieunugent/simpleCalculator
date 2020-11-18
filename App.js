
import React from "react";
import { Button, StyleSheet, Text, View, Alert, SafeAreaView } from "react-native";
import ButtonNumber from "./ButtonNumber";

export default function App() {
  return (
    <View style={styles.numberArea}>
      <View style={styles.keypads}>
        <ButtonNumber style={styles.keypad} title="1" />
        <ButtonNumber style={styles.keypad} title="2" />
        <ButtonNumber style={styles.keypad} title="3" />
      </View>
      <View style={styles.keypads}>
        <ButtonNumber style={styles.keypad} title="4" />
        <ButtonNumber style={styles.keypad} title="5" />
        <ButtonNumber style={styles.keypad} title="6" />
      </View>
      <View style={styles.keypads}>
        <ButtonNumber style={styles.keypad} title="7" />
        <ButtonNumber style={styles.keypad} title="8" />
        <ButtonNumber style={styles.keypad} title="9" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keypads: {
    flexDirection:'row',
  },

  keypad: {
  
  },
  numberArea:{
    width: '50%',

  }
});