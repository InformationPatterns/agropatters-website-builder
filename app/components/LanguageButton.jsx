import React from 'react';

class LanguageButton extends React.Component {
  lang() {
    if (this.props.lang == 'es') return 'English'
    else if (this.props.lang == 'en') return 'Español'
  }
	render () {
		return(<div onClick={this.toggle.bind(this)} className="waves-effect waves-light btn language-button">
      {this.lang()}
    </div>)
	}
  toggle() {
    if (this.props.lang == 'en') this.props.onChange('es')
    else if (this.props.lang == 'es') this.props.onChange('en')
  }
}

module.exports = LanguageButton
