require ('dotenv/config');

module.exports = {
    appUrl: process.env.APP_URL,
    port  : process.env.PORT,
    appSecret : process.env.APP_SECRET,
}