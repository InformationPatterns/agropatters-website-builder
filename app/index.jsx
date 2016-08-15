import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (<div><a className="waves-effect waves-light btn">button</a></div>);
  }
}

render(<App/>, document.getElementById('app'));
