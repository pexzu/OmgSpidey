import React from "react";
import glamorous from "glamorous-native";
import { View, Text, StyleSheet } from "react-native";
import ScoreBoard from "./ScoreBoard";
import Spidey from "./Spidey";

interface GameViewProps {}

interface GameViewState {}

export default class GameView extends React.Component<GameViewProps, GameViewState> {
  constructor(props: GameViewProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GameViewContainer>
        <ScoreBoard />
        <View
          onLayout={event => {
            var { x, y, width, height } = event.nativeEvent.layout;
          }}
        >
          <Spidey />
          <Text>This is the playground</Text>
        </View>
      </GameViewContainer>
    );
  }
}
const GameViewContainer = glamorous.view({
  height: "100%",
  width: "100%",
  backgroundColor: "yellow",
});
