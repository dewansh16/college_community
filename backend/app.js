const express = require("express");
const mongoose = require('mongoose');
const Post = require('./models/posts');

mongoose.connect('mongodb://localhost:27017/collegeCommunity');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send("Hello from college community!!!")
})

app.get('/post',async (req, res, next) => {
    const posts = await Post.find({});
    res.send(posts);
})

app.get('/post/:id', async (req, res, next) => {
    const post = await Post.findById(req.params.id);
    res.send(post);
})

app.post('/post', async (req, res, next) => {
    const data = req.body.postData;
    // const post = new Post({ data });
    // await post.save();
})

app.put('/post/:id', async (req, res, next) => {
    const {id} = req.params;
    // const post = await Post.findByIdAndUpdate(id,{...req.body.postData},{new: true});
    // res.send(post);
})

app.delete('/post/:id', async (req, res, next) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
})

app.listen(3000, () => {
    console.log("listening to port 3000");
})