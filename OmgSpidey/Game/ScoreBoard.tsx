import React from "react";
import glamorous from "glamorous-native";
import { View, Text, StyleSheet } from "react-native";

interface ScoreBoardProps {}

interface ScoreBoardState {}

export default class ScoreBoard extends React.Component<ScoreBoardProps, ScoreBoardState> {
  constructor(props: ScoreBoardProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScoreBoardContainer>
        <PrimaryTextFields>This is ScoreBoard</PrimaryTextFields>
      </ScoreBoardContainer>
    );
  }
}
const ScoreBoardContainer = glamorous.view({
  backgroundColor: "#111",
  height: "7%",
});
const PrimaryTextFields = glamorous.text({
  color: "#fff",
});
