const routeOne = (req, res) => {
	res.send("Carlos Menendez");
};

const routeTwo = (req, res) => {
	res.send("Carlos Johnson");
};

module.exports = {
	routeOne,
	routeTwo
}