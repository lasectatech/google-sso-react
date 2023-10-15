const { getTokenPayload } = require("./utils");
const { users } = require("./users");

module.exports.isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const { email } = await getTokenPayload(token);
      console.log(email);
      let user = users.find((u) => u.email == email);
      if (user) {
        req.email = email;
        next();
        return;
      }
    }
    res.sendStatus(401);
  } catch (e) {
    res.status(422);
    res.send("token invalido")
  }
};
