var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get("/",function(req,res){

	var homeData = {
		 title: 'My Portfolio',
		 content: 'This is an up to date portfolio of my digital art work for Spring 2016.',
	};
	res.render("body", homeData);
});

app.get("/about",function(req,res){

	var aboutData = {
		 title: 'Ray Hixson',
		 content: 'I am a digital artist, currently enrolled in the Master of Fine Arts program for digital art at Goucher College in Baltimore, Maryland. I live in Eugene, Oregon, where I hope to teach and continue my artistic practice after graduation.',
	};
	res.render("body", aboutData);
});

app.get("/slideshow",function(req,res){
	var slidesData = {
		 title: 'Still Images',
		 content: 'These are still images of my academic work to date.',
	};
	res.render("body", slidesData);
});

app.get("/video",function(req,res){
	var videoData = {
		 title: 'My Video Work',
		 content: 'These are links to my video works to date.',
	};
	res.render("body", videoData);
});

app.get("/contact",function(req,res){
	var contactData = {
		 title: 'Contact Me',
		 content: 'I can be contacted through my email at: corticalvortex@gmail.com',
	};
	res.render("body", contactData);
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(3600, function(){
	console.log( 'Express started on http://localhost:3600; press Ctrl-C to terminate.' );
});