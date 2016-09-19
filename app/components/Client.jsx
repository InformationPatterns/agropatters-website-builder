import React from 'react';

class Client extends React.Component {
	render () {
		return(
		  <div id={this.props.id} className="section">
		        <div className="section-content blue-grey-text text-darken-3">
		        	<h4 >
								{this.props.title}
							</h4>
		          <p className="large-font font-style blue-grey-text text-darken-3">
								{this.props.content}
							</p>
							{this.props.google ?
								<a className="googleButtonWrapper" href={`https://play.google.com/store/apps/details?id=com.agropatterns&hl=${this.props.lang}`}>
									<img className='googleButton' src={this.props.google} />
								</a>
							: null}
		        </div>
						<div className='mockImage'>
							 <img src={this.props.img} />
						</div>
		  </div>)
	}
}

module.exports = Client
