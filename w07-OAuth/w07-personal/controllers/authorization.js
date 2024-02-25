const axios = require("axios");
const path = require("path");

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// ENTRY PAGE
const authorize = async (req, res, next) => {
	const fullPath = path.join(__dirname, "./", "../static/index.html");
	res.sendFile(fullPath);
};

// AUTHORIZE TO GITHUB
const authorizeGithub = async (req, res, next) => {
	res.redirect(
		`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
	);
};

// CALLBACK FROM GITHUB
const callbackGithub = async ({ query: { code } }, res) => {
	// const code = req["code"];
	const body = {
		client_id: GITHUB_CLIENT_ID,
		client_secret: GITHUB_CLIENT_SECRET,
		code,
	};

	const opts = { headers: { accept: "application/json" } };

	axios
		.post("https://github.com/login/oauth/access_token", body, opts)
		.then((_res) => _res.data.access_token)
		.then((token) => {
			// eslint-disable-next-line no-console
			console.log("My token:", token);

			res.redirect(`/?token=${token}`);
		})
		.catch((err) => res.status(500).json({ err: err.message }));
};

// LOGOUT DRAFT - Not working yet
const logoutGithub = async (req, res, next) => {
	res.redirect(`https://github.com/`);
};

module.exports = { authorize, authorizeGithub, callbackGithub, logoutGithub };
