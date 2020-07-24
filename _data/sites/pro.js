module.exports = {
	name: "Pro",
	description: "Sites pro",
	options: {
		frequency: 30, // minutes
		// if the sites don’t share assets on the same domain, we can reset
		// chrome with each run instead of each site in every run (it’s faster)
		freshChrome: "run"
	},
	urls: [
		"http://scopyleft.fr/",
		"https://mesconseilscovid.sante.gouv.fr/",
		"https://demo.mesconseilscovid.fr/",
	]
};
