import React from 'react';

class Footer extends React.Component {
	componentDidUpdate() {
		// Materialize.updateTextFields();
	}
	render() {
		return(<footer>
							<div>
		     				<h5>Contact Me</h5>
		     			</div>
							<div>
								<h6>email</h6>
								<h6>phone</h6>
				      </div>
				    <div>
				      <div>Made By Emma Stoumen</div>
				    </div>
				  </footer>)
	}
}

module.exports = Footer
