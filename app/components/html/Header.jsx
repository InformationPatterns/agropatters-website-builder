import React from 'react';

class Header extends React.Component {
	render () {
		return(
			<div className="page-header">
				<nav className="navStyle">
					<div>
						<ul>
							<li><a href="#websiteDesign">Website Design</a></li>
							<li><a href="#Photos">Photography</a></li>
							<li><a href="#Art">Art</a></li>
						</ul>
					</div>
				</nav>
				<div className="title-wrapper">
					<h1 className="title">Emma Stoumen</h1>
				</div>
      </div>
		)
	}
}

module.exports = Header
