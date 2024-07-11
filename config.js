
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/dc1f59992d23a3213c3a8.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923080504354";
global.owner = process.env.OWNER_NUMBER || "923445869687";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "923080504354";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUprN1ZVQmM1cHQ0KzNOS2NkdHVZL0FkU1AzVEFMMnhJQzcxTStpMVVXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDF0Wm9PdUlnNHFFa0xidGpPb2pFUXVTMWtoeStaK2pEekRnbGxueUlTdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TWoyd2l3NnFaaW5ubFFMc3p5cEx0d1FmQ3hKSEFLOE9KNTh1dnliS1hzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSUd6TDdjNkxXTWdPVmEvN1RFaFUrV3NqS21IOEVFWHJLVllUTklPb1dFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFEN1dTUDFYK0cwaFlXNXRqN1l6eTUyaFRCVjgwR0ZxM1NXWWVOU3NZRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBVFVYbktWZHA2V05PbVpGYk92aVhYYTYxdGd3UmQyT2lMc3B5bDFHQTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkM4ZUlwd1hLbzFGT0R2WW5XbVVVZFdvUTI2TFZOdkQvZGk3SnMvcTZuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekdMTi84UkVEQy9MR0VCL0ZJbU8yaWRjeGtYVnR6VTE5Ky9yNmdzNDhIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd2YU9hd016NVBWaHRtelBwUmF6L1FNOWorK2tJNGRZRDR1V1pFRU9COEQvc0xXM3hmbFNrQ1BUN1JxblZWOGJEdWJ4QUJzdUlVWVM3VkpJUHlzbWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6Ilp3a0FlQ2dCWEtueDNNbE9UQm8wSTduZUlCMS92R2Z1VmRHc3VOWGRiZTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDQ1ODY5Njg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJFMUFDMzYzREIxN0E5RUFBMDdCMkY2MjE1M0ZEMjUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA2OTA3MTN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhyY3VOemtzVFFpdE5WbndJdXd3ZXciLCJwaG9uZUlkIjoiOWU5ZDU0ZGYtNzNkZi00MjNkLTgwNzgtOGUyOTY0ZDFkZWY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBRNWYySStPd0JtQnRkRUdZL1NtTWxHRXRjbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqZ0QxNjVXODhEVnM4Q2UreXR3VHR5UGRIYzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTNEUUdKMVgiLCJtZSI6eyJpZCI6IjkyMzQ0NTg2OTY4Nzo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsaSBIYWNrZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xUY3pNUUVFSlBRdnJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZDY3dUZFBnTVdsYkNvY0tnZitLS2hJbUpDMmV3TUFjd1h2eVN3TCt2U3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1rTnM0K1drZUc1QlpCbjVIS1F1d3BvTjlLSytiSG45a0dEZ2tRUmRaTi9VQVRyVU5ENXdtNkd3bDdGcUxDZG9sR2pLcTlzTXlMUmRMR3Z3WWd5YkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1dDNtMFh5NUp4TkZtYWlMRFlIbldvZHlBTlFQdEduUXU2R2pYZUdUZ2VZSDZFSmJ3SnNzZFpraUlrNDJVMjVLMXJVRFdiTzhMRVAweUtNR2lGbGRqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ0NTg2OTY4Nzo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ3bk1FM1Q0REZwV3dxSENvSC9paW9TSmlRdG5zREFITUY3OGtzQy9yMHIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA2OTA3MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUGlsIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Qurab Baloch*",
  author: process.env.PACK_AUTHER || "🆀🆄🆁🅰🅱",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "🆀🆄🆁🅰🅱",
  ownername: process.env.OWNER_NAME || "🆀🆄🆁🅰🅱",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
