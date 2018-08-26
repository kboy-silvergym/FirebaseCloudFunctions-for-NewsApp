This is a Firebase Cloud Functions samples.

Firebase Cloud Functions is useful for mobile developer like me because it's easy to develop backend apps.

If you wanted to do something regularly schedules, use the AppEngine. Its PubSub Cron feature is easy to implement.
reference -> https://developers-jp.googleblog.com/2017/04/how-to-schedule-cron-jobs-with-cloud.html

The description of this repository is written below.

# Firebase Cloud Functions

### 📹 Fetch Youtube Videos

Fetching a new Youtube video and creating list categorized by "category".

<img width="485" alt="2018-08-26 20 22 56" src="https://user-images.githubusercontent.com/17683316/44627794-de8bca00-a96e-11e8-990e-7e5f230150ce.png">

You can fetch Youtube video's infomation without using OAuth2.
All you need is just to register Google APIs.

In [functions/youtube.js](https://github.com/kboy-silvergym/FirebaseFunctionsSample/blob/master/functions/youtube.js) you can fetch the latest video on your favorite Youtube channel if you get channelId of that, and can put it into Firebase realtime database.

### 📚 Fetch Articles via RSS

Fetching a new blog article and creating list orderd by newest.

<img width="611" alt="2018-08-26 20 21 58" src="https://user-images.githubusercontent.com/17683316/44627796-de8bca00-a96e-11e8-8b28-7a25f0aca153.png">

In [functions/column.js](https://github.com/kboy-silvergym/FirebaseFunctionsSample/blob/master/functions/column.js) you can fetch articles via RSS and put it into Firebase realtime database.

# AppEngine

### ⏰ PubSub Cron

Triggerd every morning.

<img width="496" alt="2018-08-26 20 29 48" src="https://user-images.githubusercontent.com/17683316/44627795-de8bca00-a96e-11e8-9c0e-6dd4f5310bb2.png">

This is perfectly referenced from this article ( https://developers-jp.googleblog.com/2017/04/how-to-schedule-cron-jobs-with-cloud.html )

You should just edit [appengine/cron.yaml](https://github.com/kboy-silvergym/FirebaseFunctionsSample/blob/master/appengine/cron.yaml).
