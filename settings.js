const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '27634624586' : process.env.OWNER_NUMBER, //ADD YOUR NUMBER
    SESSION_ID: process.env.SESSION_ID === undefined ? '𝕃𝔸ℝ𝔸-𝕄𝔻=zAQFharK#XiQB6guz7k1zvHtKvv9IR9lUx6LCSqXD_HlHHKOtf-U' : process.env.SESSION_ID, //ADD YOUR SSION ID
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'Tristan7122' : process.env.GITHUB_USER_NAME, //ADD YOUR GITHUB USERNAME
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_ ,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
};

/*
LARA MD BOT DEVELOPED BY SADEESHA

(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
  U u  u         U  U
*/
