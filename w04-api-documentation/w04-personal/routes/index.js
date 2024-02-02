const router = require("express").Router();
const contacts = require("./contacts");

router.use("/assignments", contacts);
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