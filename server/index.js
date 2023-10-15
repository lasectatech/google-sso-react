const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getTokenPayload } = require("./utils");
const { users } = require("./users");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/api/google-sso", async (req, res) => {
  try {
    const { token } = req.body;
    const { name, lastName, email } = await getTokenPayload(token);
    let user = users.find((u) => u.email == email);
    if (!user) {
      user = { name, lastName, email };
      users.push(user);
      res.status(201);
      res.json(user);
      return
    } else {
      res.status(200);
      res.json(user);
      return
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  res.send("login");
});

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
