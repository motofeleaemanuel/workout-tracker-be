const jwksClient = require("jwks-rsa");
const dotenv = require("dotenv");
dotenv.config();

const client = jwksClient({
  jwksUri: process.env.OAUTH_JWKS,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

module.exports = { getKey };
