const express = require("express");
const mongoose = require('mongoose');
const Post = require('./models/posts');
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/collegeCommunity');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.use(express.static(`${__dirname}/public/build`))

// app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
// app.use(express.urlencoded({ extended: true }));

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

app.post('/post', async (req, res) => {
    const data = req.params;
    console.log(data);
    const post = new Post({
        title: `blah blah blahhh`,
        author:    `blah blah blahhh`,
        description: `this is the description given by blah blah blahhh`,
    });
    await post.save();
    res.send(post);
})

app.put('/post/:id', async (req, res, next) => {
    const {id} = req.params;
    const post = await Post.findByIdAndUpdate(id,{
        title: `blah blah blahhh`,
        author:    `blah blah blahhh`,
        description: `this is the description given by plah plah plahhh`,
    },{new: true});
    res.send(post);
})

app.delete('/post/:id', async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    res.send("post deleted successfully");
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("listening to port 8080");
})