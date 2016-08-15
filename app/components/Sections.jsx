import React from 'react';

class Sections extends React.Component {
	render () {
		return(<div>
			<div id={this.props.className} className={`${this.props.className} valign-wrapper most-screen`}></div>
		  <div className="container quarter-screen">
		    <div className="section">
		      <div className="row">
		        <div className="col s12 center teal-text">
		        <h4>{this.props.title}</h4>
		          <h3><i className="mdi-content-send brown-text"></i></h3>
		          <p className="center-align light font-size-large"> {this.props.content}</p>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>)
	}
}

module.exports = Sections


/*
<div id="share" className="segment-share valign-wrapper most-screen"></div>
<div className="container quarter-screen">
<div className="section">
  <div className="row">
    <div className="col s12 center teal-text">
      <h4>Information Sharing</h4>
      <h3><i className="mdi-content-send brown-text"></i></h3>
      <p className="center-align light font-size-large">Collaboration is a key component of our software solutions. Each person that uses our solutions adds valuable information and benefits from the information provided by others. The collaborative approach to building datasets opens countless opportunities to all those interested in understanding different subject matters. The collaborative approach that we have taken has proven to be invaluable in our solutions for transportation and agriculture.</p>
    </div>
  </div>
</div>
</div>

*/
// <div id="data" class="segment-data valign-wrapper most-screen"></div>

// <div class="container quarter-screen">
//   <div class="section">

//     <div class="row">
//       <div class="col s12 center teal-text">
//       <h4>Data Visualization</h4>
//         <h3><i class="mdi-content-send brown-text"></i></h3>
//         <p class="center-align light font-size-large">We deliver useful information in novel ways, by taking advantage of visualizations such as thematic maps, charts and graphs and dashboards. These visual tools summarize the big data repositories that are critical to the definition and identification of information patterns, that constantly change both spatially and through time.</p>
//       </div>
//     </div>

//   </div>
// </div>