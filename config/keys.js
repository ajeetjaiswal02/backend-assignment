require("dotenv").config();
key = process.env.ATLAS_URI
secret_key = process.env.secret

module.exports = {
  mongoURI: key,
  secretOrKey: secret_key
};