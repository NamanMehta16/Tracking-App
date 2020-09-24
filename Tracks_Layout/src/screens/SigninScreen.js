import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const SigninScreen = () => {
  return (
    <View style={styles.flex}>
      <Input
        style={styles.input}
        label="Username"
        placeholder="Username"
        leftIcon={<FontAwesome name="user" size={24} color="black" />}
      />
      <Input
        style={styles.input}
        label="Password"
        placeholder="Password"
        leftIcon={<FontAwesome name="key" size={24} color="black" />}
      />
      <Button style={styles.button} buttonStyle="red" title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    justifyContent: "flex-end",
    flex: 1,
  },
  input: {
    margin: 15,
  },
  button: {
    color: "red",
  },
});
export default SigninScreen;
