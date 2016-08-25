import React from 'react';

class BackToTop extends React.Component {
	render () {
		return(
			<div className="fixed-action-btn hide-on-small-only">
		    <a href="#top" className="btn-floating btn-large waves-effect waves-light red lighten-2">
		    <i className="large material-icons">navigation</i>
		    </a>
		  </div>
		)
	}
}

module.exports = BackToTop
