const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env. ALIVE_IMG || "http://avatars.githubuserconten.com/u/106251140?v=4",
    ALIVE_MSG:  process.env. ALIVE_MSG || "Hellow,I am YourName i am alive now!",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
