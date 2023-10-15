const { getTokenPayload } = require("./utils");
const { users } = require("./users");

module.exports.isLoggedIn = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const { email } = await getTokenPayload(token);
    console.log(email)
    let user = users.find((u) => u.email == email);
    if (user) {
      req.email = email;
      next()
      return
    }
  }
  res.sendStatus(401)
};
