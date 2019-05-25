import React, { EventHandler } from 'react';
import glamorous from 'glamorous-native';
import { View, Text, StyleSheet } from 'react-native';
import ScoreBoard from './ScoreBoard';
import Spidey from './Spidey';

interface GameViewProps {}

interface GameViewState {
  spiderCollection: {
    active: boolean;
    name: string;
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
      spiderCollection: [
        {
          name: 'VJ',
          active: true,
        },
        {
          name: 'Unni',
          active: true,
        },
        {
          name: 'Shyama',
          active: false,
        },
        {
          name: 'Vijay',
          active: false,
        },
        {
          name: 'Jithu',
          active: true,
        },
        {
          name: 'Vish',
          active: true,
        },

        {
          name: 'Yuri',
          active: false,
        },
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
    const { spiderCollection } = this.state;
    return (
      <GameViewContainer>
        <ScoreBoard />
        <Playground onLayout={event => this.getDimensionsOfPlayground(event)}>
          {spiderCollection.map(item => (
            <Room key={item.name}>
              <Spidey heightOfSpider={3} key={item.name} /> <Text>stst</Text>
            </Room>
          ))}
        </Playground>
      </GameViewContainer>
    );
  }
}
const GameViewContainer = glamorous.view({
  height: '95%',
  width: '100%',
});

const Playground = glamorous.view({
  height: '80%',
  width: '100%',
  backgroundColor: 'yellow',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
});

const Room = glamorous.view({
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da',
  flexGrow: 1,
});
