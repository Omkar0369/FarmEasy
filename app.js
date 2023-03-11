const express = require("express");
var cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
	console.log("test okk");
	res.json("test is ok");
});

app.listen(process.env.PORT, (req, res) => {
	console.log("running successfully at port " + process.env.PORT);
});
