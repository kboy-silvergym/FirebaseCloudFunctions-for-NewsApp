Firebase Cloud Functions and App Engines codes for News app.

App Engine's PubSub Cron is triggerd every morining and cloud functions fetch a new blog artilcles and Youtube videos.

# Firebase Cloud Functions

<img src="https://cdn-images-1.medium.com/max/684/1*P96fpzo_Tr0PgJwZjEjHxw.png" width=300>

### Fetch Youtube Videos

<img src="http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png" width=50>

Fetching a new Youtube video and creating list categorized by "category".

<img width="485" alt="2018-08-26 20 22 56" src="https://user-images.githubusercontent.com/17683316/44627794-de8bca00-a96e-11e8-990e-7e5f230150ce.png">

You can fetch Youtube video's infomation without using OAuth2.
All you need is just to register Google APIs.

In [functions/youtube.js](https://github.com/kboy-silvergym/FirebaseFunctionsSample/blob/master/functions/youtube.js) you can fetch the latest video on your favorite Youtube channel if you get channelId of that, and can put it into Firebase realtime database.

### Fetch Articles via RSS

<img src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_rss-512.png" width=50>

Fetching a new blog article and creating list orderd by newest.

<img width="611" alt="2018-08-26 20 21 58" src="https://user-images.githubusercontent.com/17683316/44627796-de8bca00-a96e-11e8-8b28-7a25f0aca153.png">

In [functions/column.js](https://github.com/kboy-silvergym/FirebaseFunctionsSample/blob/master/functions/column.js) you can fetch articles via RSS and put it into Firebase realtime database.

# AppEngine

<img src="http://iinegoods.com/wp-content/uploads/2017/07/gae.png" width=300>

### PubSub Cron

<img src="https://cdn.filepicker.io/api/file/Z66JAyLSXW9liZiZVqgI" width=50>

Triggerd every morning.

<img width="496" alt="2018-08-26 20 29 48" src="https://user-images.githubusercontent.com/17683316/44627795-de8bca00-a96e-11e8-9c0e-6dd4f5310bb2.png">

This is perfectly referenced from this article ( https://developers-jp.googleblog.com/2017/04/how-to-schedule-cron-jobs-with-cloud.html )

You should just edit [appengine/cron.yaml](https://github.com/kboy-silvergym/FirebaseFunctionsSample/blob/master/appengine/cron.yaml).
