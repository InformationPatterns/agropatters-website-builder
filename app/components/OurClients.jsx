import React from 'react';

class OurClients extends React.Component {
	render () {
		return(<div id='segment-ourClients'>
      <div className='container segment-ourClients white-text'>
        <h5 className="center">{this.props.title}</h5>

        <h6 className="center">{this.props.content}</h6>

        <h5>{this.props.subTitle}</h5>

        <img src={this.props.img} />
      </div>
		</div>)
	}
}

module.exports = OurClients
