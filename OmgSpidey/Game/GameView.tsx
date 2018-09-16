import React, { EventHandler } from "react";
import glamorous from "glamorous-native";
import { View, Text, StyleSheet } from "react-native";
import ScoreBoard from "./ScoreBoard";
import Spidey from "./Spidey";

interface GameViewProps {}

interface GameViewState {
SpiderCollection:{
    active:boolean;
    name:string;
}[];
  width: number;
  height: number;
  x: number;
  y: number;
}

export default class GameView extends React.Component<GameViewProps, GameViewState> {
  constructor(props: GameViewProps) {
    super(props);
    this.state = {
        SpiderCollection:[
            {
                name: 'Sam',
                email: '@gmail.com'
            },
        
            {
                name: 'Ash',
                email: 'something@gmail.com'
            }
        ],
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
  }

  getDimensionsOfPlayground = (event: any) => {
    const layout = event.nativeEvent.layout;
    this.setState({
      width: layout.width,
      height: layout.height,
      x: layout.x,
      y: layout.y,
    });
  };

  render() {
    const numbeOfSpiders = 10;
    

    return (
      <GameViewContainer>
        <ScoreBoard />
        <Playground onLayout={event => this.getDimensionsOfPlayground(event)}>
          {for(n)}
          <Text>This is the playground</Text>
        </Playground>
      </GameViewContainer>
    );
  }
}
const GameViewContainer = glamorous.view({
  height: "100%",
  width: "100%",
  backgroundColor: "yellow",
});

const Playground = glamorous.view({
  height: "100%",
  width: "100%",
});
