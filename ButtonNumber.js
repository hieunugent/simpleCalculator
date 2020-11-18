import React from 'react'
import {Button, View, StyleSheet, Alert} from 'react-native';

function ButtonNumber({title}) {
    return (
      <Button
        style={styles.container}
        title={title}
        onPress={() =>
          Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {
                text: 'Ask me later',
                onPress: () => console.log(`Ask me later pressed ${title}`),
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          )
        }
      />
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "steelblue",
    color:"white"

  },
});
export default ButtonNumber
