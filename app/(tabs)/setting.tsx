import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "blue",
  },
});
