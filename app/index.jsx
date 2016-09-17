import React from 'react';
import {render} from 'react-dom';

import T9n from './translations.jsx';

import Header from './components/Header.jsx';
import OurClients from './components/OurClients.jsx';
import Footer from './components/Footer.jsx';
import Monitor from './components/Monitor.jsx';
import Report from './components/Report.jsx';
import Client from './components/Client.jsx';

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
    	<Client {...T9n('client', lang)} />
			<Monitor {...T9n('monitor', lang)} />
			<Report {...T9n('report', lang)} />
      <OurClients {...T9n('ourClients', lang)} />
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
