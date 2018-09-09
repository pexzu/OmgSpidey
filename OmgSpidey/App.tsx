import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import glamorous, { ThemeProvider } from "glamorous-native";

export default class App extends React.Component {
  render() {
    return (
      <SpideyContainer>
        <Text>This is awesome</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </SpideyContainer>
    );
  }
}
const SpideyContainer = glamorous.view({
  flex: 1,
  backgroundColor: "blue",
  alignItems: "center",
  justifyContent: "center",
});
