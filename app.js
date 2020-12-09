var express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');

const methodOverride = require('method-override');
const Artwork = require('./models/artwork');


mongoose.connect('mongodb://localhost:27017/artGallery', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app= express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get("/", function(req, res)
{
	res.redirect('http://localhost:3000');
});



app.get("/artworks", async (req,res)=>{
	const artworks= await Artwork.find({});
    res.render('artworks/index', { artworks })
});



app.get('/artworks/new', (req, res) => {
    res.render('artworks/new');
});

app.post('/artworks', async (req, res) => {
    const artwork = new Artwork(req.body.artwork);
    await artwork.save();
    res.redirect(`/artworks/${artwork._id}`)
    res.send(req.body);
});




app.get('/artworks/:id', async (req, res,) => {
    const artwork = await Artwork.findById(req.params.id)
    res.render('artworks/show', { artwork });
});



app.get("/signup", function(req, res)
{
	res.render("artworks/signup");
});

app.get("/login", function(req, res)
{
	res.render("artworks/login");
});


app.get("/search", function(req, res)
{
	res.render("artworks/search");
});


app.delete('/artworks/:id', async (req, res) => {
    const { id } = req.params;
    await Artwork.findByIdAndDelete(id);
    res.redirect('/artworks');
});

app.listen(8080, function(){
	console.log("server has started!");
});