import React from 'react';

class Header extends React.Component {
	render () {
		return(
			<div id="segment-header">
				<nav className='z-depth-0'>
					<div className="nav-wrapper">
						<ul className="left hide-on-small-only">
							<li className='brand'>
								<img src='/images/icon.png' />
								<b>AgroPatterns</b>
							</li>
							<li><a href="#segment-client">{this.props.tabOne}</a></li>
							<li><a href="#segment-monitor">{this.props.tabTwo}</a></li>
							<li><a href="#segment-report">{this.props.tabThree}</a></li>
							<li><a href="#segment-footer">{this.props.tabFive}</a></li>
							<li><a href="https://www.agropatterns.com/" target="_blank">{this.props.tabFour}</a></li>
						</ul>
					</div>
				</nav>
				<div className='fill'></div>
				<h1 className="white-text">{this.props.title}</h1>
      </div>
		)
	}
}

module.exports = Header
