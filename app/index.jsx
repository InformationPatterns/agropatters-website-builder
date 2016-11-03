import React from 'react';
import {render} from 'react-dom';

import Header from './components/html/Header.jsx';
import Footer from './components/html/Footer.jsx';
import Body from './components/html/Body.jsx';

import BackToTop from './components/html/BackToTop.jsx';
import './components/css/main.less';
import "normalize-css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lang: 'es'
    }
  }
  render () {
    let lang = this.state.lang
    return (<div id="top" className='test'>
    	<Header />
      <Body />
			<Footer />
			<BackToTop />
		</div>);
  }
  onChange(lang) {
    this.setState({lang})
  }
}

render(<App/>, document.getElementById('app'));
