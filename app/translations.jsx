const T9n = function (name, lang) {
	if (lang == 'en') return en[name] || {}
	else if (lang == 'es') return es[name] || {}
  else return {}
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
	share: {
		title: 'Information Sharing',
		content: 'Collaboration is a key component of our software solutions. Each person that uses our solutions adds valuable information and benefits from the information provided by others. The collaborative approach to building datasets opens countless opportunities to all those interested in understanding different subject matters. The collaborative approach that we have taken has proven to be invaluable in our solutions for transportation and agriculture.',
		className: 'segment-share'
	},
	data: {
		title: 'Data Visualization',
		content: 'We deliver useful information in novel ways, by taking advantage of visualizations such as thematic maps, charts and graphs and dashboards. These visual tools summarize the big data repositories that are critical to the definition and identification of information patterns, that constantly change both spatially and through time.',
		className: 'segment-data'
	},
  footer: {
    bioTitle: 'Company Bio',
    bioContent: 'Information Patterns is a pioneer in collaboration and visual display of information. It has developed and built solutions that have been successfully deployed worldwide using best-of- breed technologies.',
    projects: 'Our Projects',
    madeBy: 'Made by'
  },
  languageButton: {
    language: 'Language'
  }
}

const es = {
  header: {
		title: '',
		subTitle: '',
		contactUs: '',
		appText: '',
		infoText: '',
		dataText: ''
	},
	app: {
		title: '',
		content: '',
		className: 'segment-apps'
	},
	share: {
		title: '',
		content: '',
		className: 'segment-share'
	},
	data: {
		title: '',
		content: '',
		className: 'segment-data'
	},
  footer: {
    bioTitle: '',
    bioContent: '',
    projects: '',
    madeBy: ''
  },
  languageButton: {
    language: ''
  }
}
