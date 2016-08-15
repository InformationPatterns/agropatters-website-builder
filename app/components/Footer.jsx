import React from 'react';

class Footer extends React.Component {
	render () {
		return(<div>
		  <div className="segment-footer valign-wrapper half-screen"></div>
		  <footer className="page-footer teal">
		    <div className="container">
		      <div className="row">
		        <div className="col l6 s12">
		          <h5 className="white-text">Company Bio</h5>
		          <p className="grey-text text-lighten-4">Information Patterns is a pioneer in collaboration and visual display of information. It has developed and built solutions that have been successfully deployed worldwide using best-of- breed technologies.</p>
		          <a className="grey-text text-lighten-1" href="mailto:gabriel.coch@infopatterns.com?Subject=Contact%20InfoPatterns">gabriel.coch@infopatterns.com</a>
		        </div>
		        <div className="col l3 s12">
		        <h1> </h1>
		        </div>

		        <div className="col l3 s12">
		          <h5 className="white-text">Our Projects</h5>
		          <ul>
		            <li><a className="white-text" href="http://www.mybusapp.co">My Bus App</a></li>
		            <li><a className="white-text" href="#!"></a> </li>
		            <li><a className="white-text" href="#!">Agro Patterns</a></li>
		            <li><a className="white-text" href="#!"></a></li>
		          </ul>
		        </div>
		      </div>
		    </div>
		    <div className="footer-copyright">
		      <div className="container">
		      Made by Emma Stoumen <a className="brown-text text-lighten-3"></a>
		      </div>
		    </div>
		  </footer>
		</div>)
	}
}

module.exports = Footer