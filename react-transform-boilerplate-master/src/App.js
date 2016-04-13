import React, { Component } from 'react';
import { NICE, SUPER_NICE, palette } from './global-styles';
// import color from 'color'
// import Radium from 'radium'


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clerInterval(this.interval);
  }

  render() {
    const {color} = this.props
    return (
      <h1 style={{color: color}}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

// @Radium
export class App extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <Counter increment={1} color={"green"} />
        <Counter increment={5} color={"blue"} />
      </div>
    );
  }
}

// Color documentation here: https://github.com/Qix-/color
const mainPadding = 10

const styles = {
  wrapper: {
    backgroundColor: '#F2F1EF',
    padding: mainPadding * 2,
    borderRadius: 5,
  }
}
