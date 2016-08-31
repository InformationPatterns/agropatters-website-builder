import React from 'react';

class Footer extends React.Component {
	componentDidUpdate() {
		// Materialize.updateTextFields();
	}
	render() {
		return(<footer id="segment-footer" className="page-footer">
					<div className="container contactTitle blue-grey-text">
     				<h5>{this.props.contactTitle}</h5>
     			</div>
					<div className="container contact">

							<form className="contact-form" action="//formspree.io/cmtoups@me.com" method="POST">
								<div className="input-field">
									<input name="name" id="name" type="text" />
									<label htmlFor="name" className="">{this.props.name}</label>
								</div>

								<div className="input-field">
									<input name="email" id="email" type="text" />
									<label htmlFor="email" className="">{this.props.email}</label>
								</div>

								<div className="input-field">
									<textarea name="body" id="message" type="text" className="materialize-textarea"/>
									<label htmlFor="message" className="">{this.props.message}</label>
								</div>
								<div className="button">
									<input  type="submit" className="waves-effect waves-light btn red lighten-2" value={this.props.button} />
								</div>
							</form>

						<div className="contact-list">
		          <ul>
		            <li className="icon-list-item">
									<i className="material-icons list-icon red-text text-lighten-2">room</i>
									<a className="grey-text">Calle 125 No.19 - 89 Ofc.502 Bogotá, Colombia</a>
								</li>
		            <li className="icon-list-item">
								<i className="material-icons list-icon red-text text-lighten-2">email</i>
									<a className="grey-text">agroskan@mapasydatos.com</a>
								</li>
		            <li className="icon-list-item">
									<i className="material-icons list-icon red-text text-lighten-2">phone</i>
									<a className="grey-text">571.638.1073</a>
								</li>
		          </ul>
		        </div>
		      </div>
		    <div className="footer-copyright">
		      <div className="container grey-text">
		      {this.props.madeBy} Emma Stoumen
		      </div>
		    </div>
		  </footer>)
	}
}

module.exports = Footer
