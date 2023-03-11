const express = require("express");
var cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const jwt = require("jsonwebtoken");

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	console.log("test okk");
	res.json("test is ok");
});

app.post("/register", async (req, res) => {
	const { name, email, password, role } = req.body;
	try {
		const userDoc = await User.create({
			name,
			email,
			password: bcrypt.hashSync(password, bcryptSalt),
			role,
		});
		res.json(userDoc);
	} catch (error) {
		res.status(422).json(error);
	}
});

app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const userDoc = await User.findOne({ email });
	if (userDoc) {
		const passOk = bcrypt.compareSync(password, userDoc.password);
		if (passOk) {
			jwt.sign(
				{
					email: userDoc.email,
					id: userDoc._id,
				},
				process.env.JWT_SECRET,
				{},
				(error, token) => {
					if (error) {
						throw error;
					} else {
						res.cookie("token", token).json(userDoc);
					}
				}
			);
		} else {
			res.status(422).json("Wrong Password!");
		}
	} else {
		res.json("Not Found!");
	}
});

app.listen(process.env.PORT, (req, res) => {
	console.log("running successfully at port " + process.env.PORT);
});
