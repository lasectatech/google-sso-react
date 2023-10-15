const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(CLIENT_ID);

module.exports.getTokenPayload = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  const { given_name, family_name, email } = ticket.getPayload();
  return { name: given_name, lastName: family_name, email };
};
