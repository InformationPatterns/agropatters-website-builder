import React from 'react';
import {render} from 'react-dom';

import T9n from './translations.jsx';

import Header from './components/Header.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

import BackToTop from './components/BackToTop.jsx';
import LanguageButton from './components/LanguageButton.jsx';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lang: 'es'
    }
  }
  render () {
    let lang = this.state.lang
    return (<div id="top">
    	<Header {...T9n('header', lang)} />
    	<Sections {...T9n('client', lang)} />
			<Sections {...T9n('monitor', lang)} />
			<Sections {...T9n('report', lang)} />
			<Footer {...T9n('footer', lang)} />
      <LanguageButton lang={lang} onChange={this.onChange.bind(this)} {...T9n('languageButton', lang)} />
			<BackToTop />
		</div>);
  }
  onChange(lang) {
    this.setState({lang})
  }
}

render(<App/>, document.getElementById('app'));
