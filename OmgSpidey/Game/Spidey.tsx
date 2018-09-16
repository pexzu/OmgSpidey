import React from "react";
import glamorous from "glamorous-native";
import { View, Text, StyleSheet } from "react-native";

interface SpiderProps {
  heightOfSpider: number;
}

interface SpiderState {}

export default class Spider extends React.Component<SpiderProps, SpiderState> {
  constructor(props: SpiderProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <Spidey />;
  }
}
const Spidey = glamorous.view({
  height: "6%",
  backgroundColor: "black",
  width: "10%",
});
