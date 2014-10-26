// global access
var express = require('express'),
	engine = require('ejs-locals'),
	sm = require('sitemap'),
	fs = require('fs'),
	// require http request
	http = require('http'),
	// instantiate express
	app = express(),
	// create server using app
	httpServer = http.createServer(app),
	sitemap = sm.createSitemap ({
		hostname: 'http://www.goportlight.com',
		cacheTime: 60000,        // 60 sec - cache purge period
		urls: [
			{ url: '/',  changefreq: 'daily', priority: 1.00 },
			{ url: '/creations/web-menu',  changefreq: 'monthly', priority: 0.70 }
		]
	}),
	// set port 
	port = 80;

app.engine('ejs', engine);

// set templating engine to ejs (jade sucks)
app.set('view engine', 'ejs');
app.use('/views', express.static('/views'));
app.use('/views/creations', express.static('/views/creations'));
app.use('/assets', express.static(__dirname + '/assets'));

// http variables
app.use(express.bodyParser());


// at location run function
app.get('/',function(req, res){
	res.render('index', {message: req.params.id});
});
app.get('/:page',function(req, res){
	if(fs.existsSync('views/'+req.params.page+'.ejs')){
		res.render(req.params.page, {message: req.params.id});
	}else if(req.params.page === "sitemap.xml"){
		sitemap.toXML( function (xml) {
			res.header('Content-Type', 'application/xml');
			res.send( xml );
		});
	}else{
		res.render('404');
	}
});
app.get('/creations/:page',function(req, res){
	if(fs.existsSync('views/creations/'+req.params.page+'.ejs')){
		res.render('creations/'+req.params.page, {message: req.params.id});
	}else{
		res.render('404');
	}
});

// starts server on specified port
httpServer.listen(port, function(){
	console.log("Port Listening on port "+port)
});
