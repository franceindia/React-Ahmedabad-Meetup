import React, { Component } from 'react';
import { NICE, SUPER_NICE, palette } from './global-styles';
import color from 'color'
import Radium from 'radium'
import {StyleRoot} from 'radium'


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
    const color = this.props.color
    return (
      <h1 style={{color: color}}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

@Radium
export class App extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <Counter increment={1} color={color(palette.BROWN).lighten(.5).hexString()} />
        <Counter increment={5} color={palette.ORANGE} />
      </div>
    );
  }
}

// Color documentation here: https://github.com/Qix-/color
const baseColor = color(palette.BEIGE)
const mainPadding = 10

const styles = {
  wrapper: {
    fontFamily: 'verdana',
    backgroundColor: baseColor.desaturate(0.3).rgbString(),
    padding: mainPadding * 2,
    borderRadius: 5,
    ':hover': {
      backgroundColor: baseColor.clearer(0.3).rgbString(),
      cursor: 'pointer'
    },
    ':active': {
      backgroundColor: baseColor.darken(0.1).rgbString()
    },
    '@media (min-width: 768px)': {
      color: palette.ORANGE
    }

  }
}
