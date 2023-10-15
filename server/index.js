const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const { getTokenPayload } = require("./utils")

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post("/api/google-sso", async (req, res) => {
  const { token } = req.body;
  const { name, lastName, email } = await getTokenPayload(token);
  res.send("login")
});

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
