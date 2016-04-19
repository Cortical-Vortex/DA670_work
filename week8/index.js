var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(require('body-parser').urlencoded({extended:true}));

app.get('/',function(req,res){	
	res.render('questionnaire');	
});

app.post('/spin',function(req,res){

	var name = req.body.name;
	var color = req.body.color;
	var friend = req.body.friend;
	var place = req.body.place;
	var place2 = req.body.place2;
	var animal = req.body.animal;
	var dessert = req.body.dessert;

	if (name && color && friend && place && place2 && animal && dessert){
		var data = {
			name: name,
			color: color,
			friend: friend,
			place: place,
			place2: place2,
			animal: animal,
			dessert: dessert
		}
	} else {
		var data = {
			error: 1,
			message: "You left at least one space blank."
		}
	}

	res.render('story',data);
	
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

app.listen(3400, function(){
	console.log( 'Express started on http://localhost:3400; press Ctrl-C to terminate.' );
});