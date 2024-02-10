const router = require("express").Router();
const contacts = require("./contacts");

router.use("/", contacts);
router.use("/", require("./swagger"));
router.use(
	"/",
	(docData = (req, res) => {
		let docData = {
			documentationURL: "https://cse341.netlify.app/lesson4/assignment",
		};
		res.send(docData);
	})
);

module.exports = router;
