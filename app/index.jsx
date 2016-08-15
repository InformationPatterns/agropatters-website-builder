import React from 'react';
import {render} from 'react-dom';

import T9n from './translations.jsx';

import Header from './components/Header.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

import BackToTop from './components/BackToTop.jsx';
import LanguateButton from './components/LanguateButton.jsx';


class App extends React.Component {
  render () {
    return (<div id="top">
    	<Header {...T9n('header', 'en')} />
    	<Sections {...T9n('app', 'en')} />
			<Sections {...T9n('info', 'en')} />
			<Sections {...T9n('data', 'en')} />
			<Footer {...T9n('footer', 'en')} />
			<BackToTop />
			<LanguateButton />
		</div>);
  }
}





render(<App/>, document.getElementById('app'));
