import React from 'react';

class Footer extends React.Component {
	componentDidUpdate() {
		// Materialize.updateTextFields();
	}
	render() {
		return(<footer className="page-footer">
							<div className="footer-wrapper">
								<h6 className="footer-style">emmastoumen @ gmail.com</h6>
								<h6 className="footer-style">919.428.4126</h6>
				      </div>
				    {/* <div className="made-by">
				      <div>Made by Emma Stoumen</div>
				    </div> */}
				  </footer>)
	}
}

module.exports = Footer
