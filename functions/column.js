const admin = require('firebase-admin');
const FeedParser = require('feedparser');
const request = require('request');
const rssURL = `<- something ->`

exports.fetchColumn = function () {
    var req = request(rssURL);
    var feedparser = new FeedParser();
    var items = [];

    req.on('error', function (error) {
        console.log('request error', error)
    });

    req.on('response', function (res) {
        var stream = this; // `this` is `req`, which is a stream

        if (res.statusCode !== 200) {
            this.emit('error', new Error('Bad status code'));
        }
        else {
            stream.pipe(feedparser);
        }
    });

    feedparser.on('error', function (error) {
        console.log('handle error', error)
    });

    feedparser.on('readable', function () {
        var stream = this;
        var meta = this.meta;
        var item;

        while (item = stream.read()) {
            items.push(item);
        }
    });

    feedparser.on('end', function () {
        // 最新の１件目
        const firstItem = items[0];

        const title = firstItem.title;
        const url = firstItem.link;
        const date = firstItem.date;
        const img_url = firstItem.image.url;
        const categories = firstItem.categories;

        console.log(title);

        // databaseに保存
        var postData = {
            title: title,
            url: url,
            date: date,
            img_url: img_url,
            category: categories
        };
        var category = categories[0]
        var columnRef = admin.database().ref('/Articles/Column/');
        var categoryRef = columnRef.child(category)

        categoryRef.limitToLast(1).once('value').then(function (snapshot) {
            var childData;
            snapshot.forEach(function (child) {
                childData = child.val();
            });
            var last_url = (childData != null) ? childData.url : '';

            // 前のやつとURLが違ったら更新
            if (last_url != url) {
                var newPostKey = categoryRef.push().key;
                var updates = {};
                updates['/Articles/Column/' + category + '/' + newPostKey] = postData;
                admin.database().ref().update(updates);
            };
        });
    });
}