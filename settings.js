/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VV25KiSBT8l3rVWe43IzpiAQVRUFHxtrEPBRSIKGBVIdIT/vsG7fROx+7MbC9PFQWVlSdP5uErKMqMoClqweArqHB2gxR1S9pWCAyAUScJwqAPYkghGADisTE5nBi67Z3utNTvDD+v6ol6tYTdPVnxLXfO5tVOr6z8BTz6oKrDcxb9CvDiVJJ0mTvCGg7X5swfN2XQ7FUj1yRzmRm+27hr/z7xreAFPDpEmOGsSEfVEV0Qhucpahcww5+jz4+SNZNaqn2+T5np8phXOWXMy1Hs3ehd2oW9c3w4lIejH6ifo78UuFsa6jO8We9aFEwPjLciMCpxBGsltZ1cCcJVvRuG4/2TPsnSAsVOjAqa0fbTutvOrZX20uiVPTj0wqr4UpTRSM5Dj16F4+jqukY84TeBnDefI14Frer6Wptup2O0VTlmpQQH7srVNnVPKiPOLYd1Gkun2+gj8QV+90r+f3Tfu9rMW9t+kd3UuzccY1LqJXsjytqepCw5G8t8EbD5Ngz2n6MfNAncrbQVT6crV6GHySYlh1iFvV17nm9atpC83jjyojPHfqcPaY1/xVIlSshZczqBikP9asGx5mE/xUnG8OKukenRGYZFI0rLwjiiovU3PVFYjIwLaa0w0hltrq5uGwlLnO2d7wfWu7HC5eS/vFWUo9aJwYB79AFGaUYohjQri26Pl9g+gPFthSKM6Ju8IJpKr03RtK+CvqvxromW1pQ/+evsHoy2ns3yrOuV8d0Yn9UX0AcVLiNECIrHGaElbj1ECEwRAYM/3jrVFY3RpaRoksVdDiRZUQSF1SRJ+J381hwhJbCqfisQBX2Q4PLiITCguEZ98HaAM0XJEkRZGMosL1s8Z2qczousrA0FkzOlrsTL89J1dkGEwksFBpwiSqyqior8+LMPCnSnT/90VQtSHyQZJjQo6upcwvjdXO8vYRSVdUFXbRGZ3QJhMGC/byNKsyIlXWV1AXF0zG7I7OoAgwSeCXr0QYxuWYQ6PHCqjSlr17XPXoXSJLX2quGr3il3LIvnJ5qaaKEgy1+gzIpfRD5Rv2gw1r7wocTGkSoiLlFAJ8czut2ZnzpJuY4UNy6vc9YaKspkJOf8PFqGQ0UN3tzwtADCKH5XOYRRXlfrMkfFL3Dbxc6+rVNFJtt4dU/TacpY7dSBc0o+4D6tBQZfv49Ls4w7vMlm4akzXwRdt7p7/uWGAc/+0xCPv0XvTsSIwuxMwACYbgKvYmSNvFNyUnXb1p1UN9NO1fcmvYfuaWr4mlojz7uFZt7o0W0qJ3tnviz4ZmxXDcu4nuIlnNlwxlZ/+QFIl9B5mUzW+2t5nOBoPJxf2/pWHscr310ivMjE2WoZ2OtpI4fwOjtMSp8elpljhEalblRrkrlr67IRvSTtqXjIwu0pIFuzeelue5rl42XOaH+cZPRopJV/Z+Trkfj6UtTqpucs18wivuEZjbZ3bhfaW2+13RpSmDfp5HQwFj3XDpxIERgmWjmnHC82C9PLk2B4ap7j4G0cnb/9BrJvQX1aK8nQ21QtYNei/2rOR5ezj/4HjG9z+idOMrZENJbDocs3laeP3bYueHOYHzRi3K/RbNG+zl/Hmk9m/iYFjy6+1RnSpMSXrpFFjMssBn1whoTq34P6o+yzfXBp9apaUUjf8w307rE9CTz+Ah8hDZSCCAAA';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '256773709553';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'BILLY-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'false';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'sorry i can't talk ón the call now';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
