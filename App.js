
import React from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="click me"
        onPress={() =>
          Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed"),
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          )
        }
      />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});