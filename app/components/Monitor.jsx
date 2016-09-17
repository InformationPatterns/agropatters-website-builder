import React from 'react';

class Monitor extends React.Component {
	constructor() {
    super()
    this.state = { activeNumber: 1 };
		setInterval(() => {
			let nextNumber = this.state.activeNumber + 1;
			if (nextNumber == 4) {
				nextNumber = 1
			}
			this.setState({activeNumber: nextNumber})
		}, 3000)
  }
	render() {
		return(
		  <div id={this.props.id} className="section">
	      <div className="section-content blue-grey-text text-darken-3">
	      	<h4> {this.props.title} </h4>
	        <p className="large-font font-style blue-grey-text text-darken-3">
						{this.props.content}
					</p>
	      </div>
				<div className='monitoring'>
					<img className='blankPosition' src='images/blank.png' />
					<img className={`monitorPosition ${this.getActive(1)}`} src='images/monitoring.png'/>
					<img className={`monitorPosition ${this.getActive(2)}`} src='images/monitoring2.png'/>
					<img className={`monitorPosition ${this.getActive(3)}`} src='images/monitoring3.png'/>
				</div>
		  </div>)
	}
	getActive(num) {
		if (num == this.state.activeNumber) {
			return 'active'
		}
	}
}

module.exports = Monitor
