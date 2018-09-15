import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import glamorous, { ThemeProvider } from "glamorous-native";
import GameView from "./Game/GameView";
import { StatusBar } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <StatusBar hidden={true} />
        <GameView />
      </AppContainer>
    );
  }
}
const AppContainer = glamorous.view({
  flex: 1,
  backgroundColor: "blue",
  alignItems: "center",
  justifyContent: "center",
});
