import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button } from '../../src';

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>component-library Demo</h1>
        <Button name="Shame">Nooo</Button>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
