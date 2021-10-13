const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.use("/style", express.static(__dirname + "/style"));
app.use("/dist", express.static(__dirname + "/dist"));

app.listen(8000);
