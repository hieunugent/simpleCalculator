
import React from "react";
import { Button, StyleSheet, Text, View, Alert, SafeAreaView } from "react-native";
import ButtonNumber from "./ButtonNumber";

export default function App() {
  return (
    <SafeAreaView style={styles.keypads}>
      <View style={styles.keypad}>
        <ButtonNumber title="1" />
        <ButtonNumber title="2" />
        <ButtonNumber title="3" />
      </View>
      <View style={styles.keypad}>
        <ButtonNumber title="4" />
        <ButtonNumber title="5" />
        <ButtonNumber title="6" />
      </View>
      <View style={styles.keypad}>
        <ButtonNumber title="7" />
        <ButtonNumber title="8" />
        <ButtonNumber title="9" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  keypads:{
    flex : 1,
    backgroundColor:"steelblue",
    

  },

  keypad: {

    flexDirection:'row',
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    
  },
});