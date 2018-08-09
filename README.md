This is a Firebase Cloud Functions samples.

Firebase Cloud Functions is useful for mobile developer like me because it's easy to develop backend apps.

If you wanted to do something regularly schedules, use the AppEngine. Its PubSub Cron feature is easy to implement.
reference -> https://developers-jp.googleblog.com/2017/04/how-to-schedule-cron-jobs-with-cloud.html

The description of this repository is written below.

# Firebase Cloud Functions

### 📹 Fetch Youtube Videos

You can fetch Youtube video's infomation without using OAuth2.
All you need is just to register Google APIs.

In `functions/youtube.js` you can fetch the latest video on your favorite Youtube channel if you get channelId of that, and can put it into Firebase realtime database.

### 📚 Fetch Articles via RSS

In `functions/column.js` you can fetch articles via RSS and put it into Firebase realtime database.

# AppEngine

### ⏰ PubSub Cron

This is perfectly referenced from this article ( https://developers-jp.googleblog.com/2017/04/how-to-schedule-cron-jobs-with-cloud.html )

You should just edit `appengine/cron.yaml`. It's way too easy!
