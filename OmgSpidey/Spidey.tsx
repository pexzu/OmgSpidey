import React from "react";
import glamorous from "glamorous-native";

interface SpiderProps {}

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
const Spidey = glamorous.view({});
