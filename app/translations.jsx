const T9n = function (name, lang) {
	if (lang == 'en') return en[name] || {}
	else return es[name] || {}
}
module.exports = T9n

const en = {
	header: {
		title: 'Information Patterns',
		subTitle: 'We Are a Software Development Company',
		contactUs: 'Contact Us',
		appText: 'Apps and Hardware',
		infoText: 'Information Sharing',
		dataText: 'Data Visualization'
	},
	app: {
		title: 'Applications, Content and Sensors',
		content: 'We build apps that help people capture and display data easily. These apps are connected to third party data providers and to sensors that send out detailed information about specific environmental conditions. The result is a comprehensive model of reality built by the multiple participants that are constantly observing the',
		className: 'segment-apps'
	},
	info: {
		title: 'Information Sharing',
		content: 'Collaboration is a key component of our software solutions. Each person that uses our solutions adds valuable information and benefits from the information provided by others. The collaborative approach to building datasets opens countless opportunities to all those interested in understanding different subject matters. The collaborative approach that we have taken has proven to be invaluable in our solutions for transportation and agriculture.',
		className: 'segment-share'
	},
	data: {
		title: 'Data Visualization',
		content: 'We deliver useful information in novel ways, by taking advantage of visualizations such as thematic maps, charts and graphs and dashboards. These visual tools summarize the big data repositories that are critical to the definition and identification of information patterns, that constantly change both spatially and through time.',
		className: 'segment-data'
	}
}

const es = { 

}