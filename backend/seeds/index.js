const mongoose = require('mongoose');
const Post = require('../models/posts');

mongoose.connect('mongodb://localhost:27017/collegeCommunity');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Post.deleteMany({});
    for (let i = 0; i < 20; i++){
        const randomCent = Math.floor(Math.random() * 100);
        const newPost = new Post({
            title: `random Help Req ${randomCent}`,
            author:    `UserNo. ${randomCent}`,
            description: `this is the description given by userNo. ${randomCent}`,
        })
        await newPost.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})