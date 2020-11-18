
import React from "react";
import { Button, StyleSheet, Text, View, Alert, SafeAreaView } from "react-native";
import ButtonNumber from "./ButtonNumber";

export default function App() {
  return (
    <>
      <View style={styles.calculateShow}>
        <View style={styles.calculateShowDetail}>
          <Text style={styles.contentValueShow}>12343533</Text>
        </View>
      </View>
      <View style={styles.controlPad}>
        <View style={styles.numberArea}>
          <View style={styles.keypadStroke}>
            <View style={styles.keyLeftTop}>
              <Text style={styles.contentValueTop}>AC</Text>
            </View>
            <View style={styles.keyLeftTop}>
              <Text style={styles.contentValueTop}>+/-</Text>
            </View>
            <View style={styles.keyLeftTop}>
              <Text style={styles.contentValueTop}>%</Text>
            </View>
          </View>
          <View style={styles.keypads}>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>1</Text>
            </View>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>2</Text>
            </View>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>3</Text>
            </View>
          </View>
          <View style={styles.keypads}>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>4</Text>
            </View>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>5</Text>
            </View>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>6</Text>
            </View>
          </View>
          <View style={styles.keypads}>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>7</Text>
            </View>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>8</Text>
            </View>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>9</Text>
            </View>
          </View>
          <View style={styles.keypads}>
            <View style={styles.keyNodeRSpec}>
              <Text style={styles.contentValue}>0</Text>
            </View>
            <View style={styles.keyNodeRight}>
              <Text style={styles.contentValue}>.</Text>
            </View>
          </View>
        </View>
        <View style={styles.leftSide}>
          <View style={styles.keyNodeLeft}>
            <Text style={styles.contentValue}>÷</Text>
          </View>
          <View style={styles.keyNodeLeft}>
            <Text style={styles.contentValue}>×</Text>
          </View>
          <View style={styles.keyNodeLeft}>
            <Text style={styles.contentValue}>-</Text>
          </View>
          <View style={styles.keyNodeLeft}>
            <Text style={styles.contentValue}>+</Text>
          </View>
          <View style={styles.keyNodeLeft}>
            <Text style={styles.contentValue}>=</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  controlPad: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  keypadStroke: {
    flex: 0,
    flexDirection: 'row',
  },

  keypads: {
    flex: 0,
    flexDirection: 'row',
  },
  numberArea: {
    flex: 0,
    justifyContent: 'flex-end',
  },
  leftSide: {
    flex: 0,
    justifyContent: 'flex-end',
  },
  keyLeftTop: {
    width: 80,
    height: 80,
    backgroundColor: 'burlywood',
    margin: 5,
    borderRadius: 40,
    alignContent: 'center',
    alignItems: 'center',
  },
  keyNodeLeft: {
    width: 80,
    height: 80,
    backgroundColor: 'orange',
    margin: 5,
    borderRadius: 40,
    alignContent: 'center',
    alignItems: 'center',
  },
  keyNodeRight: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
    margin: 5,
    borderRadius: 40,
    alignContent: 'center',
    alignItems: 'center',
  },
  keyNodeRSpec: {
    width: 170,
    height: 80,
    backgroundColor: 'gray',
    margin: 5,
    borderRadius: 40,
    alignContent: 'center',
    alignItems: 'center',
  },
  contentValue: {
    margin: 5,
    alignItems: 'center',
    fontSize: 45,
    color: 'white',
  },

  contentValueTop: {
    margin: 5,
    alignItems: 'center',
    fontSize: 45,
    color: 'black',
  },
  calculateShow: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  calculateShowDetail: {
    flex: 0,
    flexDirection:'row',
    justifyContent: 'flex-end',
  },
  contentValueShow: {
    margin: 5,
    fontSize: 55,
    color: 'white',
    
  },
});