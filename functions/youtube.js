const admin = require('firebase-admin');
const { google } = require('googleapis');
const apiKey = '<- something ->'
const youtubeChannelId = '<- something ->'
const youtube = google.youtube({ version: 'v3', auth: apiKey });

exports.fetchYoutube = function () {
    youtube.search.list({
        part: 'snippet',
        channelId: youtubeChannelId,
        maxResults: 1,
        order: `date`,
        type: `video`,
        videoDefinition: `high`
    }, (err, response) => {
        if (err) {
            console.log(err);
            return;
        }
        const items = response.data.items;
        const item = items[0];
        const id = item.id.videoId;
        const snippet = item.snippet;
        const title = snippet.title;
        const img_url = snippet.thumbnails.high.url;
        const date = snippet.publishedAt

        console.log(id, title, img_url);

        // descriptionを全部取得するため
        // ここでさらにidを使ってAPIを叩く
        loadDescription(id, title, img_url, date);
    });
}

function loadDescription(id, title, img_url, date) {
    youtube.videos.list({
        part: 'snippet',
        id: id
    }, (err, response) => {
        if (err) {
            console.log(err);
            return;
        }
        const items = response.data.items;
        const item = items[0];
        const snippet = item.snippet;
        const description = snippet.description;

        saveToFirebaseRDB(id, title, img_url, description, date);
    });
}

// realtime databaseに保存
function saveToFirebaseRDB(id, title, img_url, description, date){
    const postData = {
        id: id,
        title: title,
        img_url: img_url,
        date: date,
        descritption: descritption,
    };
    const videoRef = admin.database().ref('/Articles/Video/');
    const categoryRef = videoRef.child(category);

    categoryRef.limitToLast(1).once('value').then(function (snapshot) {
        var childData;
        snapshot.forEach(function (child) {
            childData = child.val();
        });
        const last_id = (childData != null) ? childData.id : '';

        // 前のやつとidが違ったら更新
        if (last_id != id) {
            const newPostKey = categoryRef.push().key;
            var updates = {};
            updates['/Articles/Video/' + category + '/' + newPostKey] = postData;
            admin.database().ref().update(updates);
            console.log(`Success to insert a new video.`);
        };
    });
}