const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SIkBxSiQ#qrhlrz0odM2b3yhECNKI4PoTcy0b93bcLfJZbJ0_xCM",
    ALIVE_IMG: process.env. ALIVE_IMG || "https://photos.app.goo.gl/4jgu6cW35kSLQLg5A.jps",
    ALIVE_MSG:  process.env. ALIVE_MSG || "Hellow,I am YourName i am alive now!",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
