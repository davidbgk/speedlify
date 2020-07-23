module.exports = {
	name: "Pro", // optional, falls back to object key
	description: "Sites pro",
	options: {
		frequency: 60 * 3, // hours
		// if the sites don’t share assets on the same domain, we can reset
		// chrome with each run instead of each site in every run (it’s faster)
		freshChrome: "run"
	},
	urls: [
		"http://scopyleft.fr/",
		"https://mesconseilscovid.sante.gouv.fr/",
		"http://demo.mesconseilscovid.fr/",
	]
};
