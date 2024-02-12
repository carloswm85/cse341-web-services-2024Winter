const router = require("express").Router();
const authors = require("./authors");

router.use("/", authors);
router.use("/", require("./swagger"));
router.use(
	"/",
	(docData = (req, res) => {
		let docData = {
			documentationURL: "https://cse341.netlify.app/lesson5",
		};
		res.send(docData);
	})
);

module.exports = router;
