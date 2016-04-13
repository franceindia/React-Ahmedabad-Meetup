import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { StyleRoot } from 'radium'
require('./main.css')

render(<StyleRoot><App /></StyleRoot>, document.getElementById('root'));
