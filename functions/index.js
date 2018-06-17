const functions = require('firebase-functions');
const admin = require('firebase-admin');
const column = require(`./column.js`);
const youtube = require(`./youtube.js`);

admin.initializeApp();

// 定期実行のfunctions
exports.daily_job = functions.pubsub.topic('daily-tick').onPublish((event) => {
  console.log("This job is ran every day!");
  column.fetchColumn();
  youtube.fetchYoutube();
  return 0;
});
