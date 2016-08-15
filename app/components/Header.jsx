import React from 'react';

class Header extends React.Component {
	render () {
		return(<div>
			<div id="index-banner" className="segment-header large-screen">
		    <div className="section">
		      <div className="container">
		        <br/>
		        <h1 className="header center teal-text text-darken-3 white-glow">{this.props.title}</h1>
		        <div className="row center">
		          <h5 className="header col s12 light teal-text text-darken-3 white-glow">{this.props.subTitle}</h5>
		        </div>
	        	<div className="row center hide-on-small-only">
		          <a id="download-button" className="btn-large waves-effect waves-light orange " href="mailto:gabriel.coch@infopatterns.com?Subject=Contact%20InfoPatterns">{this.props.contactUs}</a>
		        </div>
		        <br/>
		      </div>
		    </div>
		  </div>


		  <div className="container small-screen">
		    <div className="section">

		      <div className="row">

		        <a href="#section-app" className="col s4">
		          <div className="icon-block">
		            <h2 className="center">
		              <div className="btn-floating btn-large waves-effect waves-light orange"><i className="material-icons">phonelink_ring</i></div>
		              </h2>
		            <h5 className="center teal-text hide-on-small-only">{this.props.appText}</h5>
		          </div>
		        </a>
		        
		        <a href="#section-share" className="col s4">
		          <div className="icon-block">
		            <h2 className="center">
		            <div className="btn-floating btn-large waves-effect waves-light orange"><i className="material-icons">view_quilt</i></div></h2>
		            <h5 className="center teal-text hide-on-small-only">{this.props.infoText}</h5>
		          </div>
		        </a>    

		        <a href="#section-data" className="col s4">
		          <div className="icon-block">
		            <h2 className="center">
		              <div className="btn-floating btn-large waves-effect waves-light orange"><i className="material-icons">equalizer</i></div>
		            </h2>
		            <h5 className="center teal-text hide-on-small-only">{this.props.dataText}</h5>
		          </div>
		        </a>

		      </div>

		    </div>
		  </div>
			</div>
		)
	}
}

module.exports = Header