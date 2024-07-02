
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
global.owner = process.env.OWNER_NUMBER || "923080504354";
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
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05oWERvTnIvcEpsNXo4djdpZVNScGk2RTAvUWZTYnVObEgxY3o2bXlXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3VxUitTNC9SYndBT0ZkT2VEc1Q5UTh4Y21BMjZaeXNaS1pKTDV4UlppQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS1EvUks3c3ZEeFZwcFlhRmUxa0xQdU1ROGtsaU5pblVEV2ZyOS9YQ1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUbVNHajl4TjErMG1YaWdvMXRtZ3l1eEtqU05FMzNyVjE1ZERZdzUyYUNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1GalRpMHlaalFpMlpxV2NFdk9QbnlYTkgxOEh3cjUxRFdXT3hrNXlrVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFaZ3daaFd4SFZ2TUl2dFJON21YQi9GNjRtTDZtVitGQVkySmVoYXdpR0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENZYVkzQjBUNUVCQkFKeUhacytvSmFOZkppRWduMG44eGtQTFo5RnJHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM01rc09QNU13bEJRTm1peHZxZ3cwRTVQM1poeXZGMzVDbFhrenlDSjRSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFSWNPZE1tSTFOcFRpWEE0NlJqYjhNMTZWdHMzMEZvcFB3UFdzUzlmMlhvZjZMWVZ6dmFUMm96bGYrK3VLclA4eDdBaitvNTEvYmdBWDhVcVkremlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJIaFEzcVBHUDNtMFI0bjB0WDlkYnVFV2t3MG9Tb3pLZ0lFbnZuSUtpZEhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSYWNFa2laNlNaV1FyTDdhejc2Vjh3IiwicGhvbmVJZCI6IjY3YzgzNzAxLTRjNmQtNGZmMS05NGRjLWFmZTQ2OGEyYmJhNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJY2tRWmlKeWVsa1lUbFdocFVzdG9EOE9xK009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWZMZnVEUld4bU9EUW82OHc4M3ZmQWRzbm9NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo2REc3Tks5IiwibWUiOnsiaWQiOiI5MjMxNzA3MTk3ODQ6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3VFOHVrR0VLamYrTE1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT3Y5eU9idkRYTHl2NnJpNTNtOWt5TVVWU21ZSWZ2SUcwcGxDZHVvMEN5OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWDVzK3hsY1FTMTh5dzEwalptRzN6c0xXSng1cFBudWJGN2NMMWcrdWtBWHFFY1hoUXNYOWdET01TT01DckN3c2c0SEtTNkJNL1h5WmdvQjQyL0ZIQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkVUQ1BXbmRsYmNzZVFQZVFmSUw0b2VyVWN3MlFTRE44Uy9OVngxNDlONWVGWWJjVERVc01hUHVaa090WFZoa2RGZ281ZFE0MS9rSlN1RlIvZXhFZ2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTcwNzE5Nzg0OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHIvY2ptN3cxeThyK3E0dWQ1dlpNakZGVXBtQ0g3eUJ0S1pRbmJxTkFzdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTU0NTc3MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJVjMifQ=="
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
