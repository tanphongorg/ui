import React, { Component } from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';

import ButtonComponent from './components/ButtonExampleEmphasis'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <ButtonComponent />
        </p>
      </div>
    );
  }
}

export default App;
