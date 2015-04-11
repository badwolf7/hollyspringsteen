// MAKE SURE REQUIRES GO OUTSIDE THE MODULE
// The reason being that requires are pointers however
// when included into a module they get stored into memory
// every time a module is called upon
var fs = require("fs");
var sm = require('sitemap');
var mongojs = require('mongojs');
var collections = ['creations','flickr'];

if(process.env.PORT){
	var db = mongojs('104.131.82.47:27017/hollyspringsteen',collections);
}else{
	var db = mongojs('localhost:27017/hollyspringsteen',collections);
}

module.exports = function(){
	// PAGES
	// at location run function
	app.get('/',function(req, res){
		db.creations.find(function(err,creations){
			if(!err){
				res.render('index', {message: req.params.id, creations:creations});
			}else{
				console.log(err);
			}
		});
	});
	app.get('/:page',function(req, res){
		db.creations.find(function(err,creations){
			if(fs.existsSync('views/'+req.params.page+'.ejs')){
				if(fs.existsSync('views/'+req.params.page+'.ejs')){
					res.render(req.params.page, {message: req.params.id, creations:creations});
				}else{
					res.render('404');
				}
			}else if(req.params.page === "sitemap.xml"){
				sitemap.toXML( function (xml) {
					res.header('Content-Type', 'application/xml');
					res.send( xml );
				});
			}else{
				console.log(err);
			}
		});
	});
	app.get('/creations/:page',function(req, res){
		if(req.params.page == 'project'){
			var projectName = req.query.p;
			db.creations.find({name:projectName},function(err,project){
				db.flickr.find({"photos.media":"photo"},function(err,photos){
					if(fs.existsSync('views/creations/'+req.params.page+'.ejs')){
						res.render('creations/'+req.params.page, {message: req.params.id, project:project, flickr:photos[0].photos});
					}else{
						console.log(err);
						res.render('404');
					}
				});
			});
		}else{
			db.creations.find().sort({dateRange:-1, id:1},function(err,creations){
				if(!err){
					db.flickr.find({"photos.media":"photo"},function(err,photos){
						if(fs.existsSync('views/creations/'+req.params.page+'.ejs')){
							for(var j=0;j<photos[0].photos.length;j++){
								console.log(photos[0].photos[j].sizes.sizes.size);
								if(photos[0].photos[j].sizes.sizes.size.label == 'Medium 800'){
									console.log(photos[0].photos[j].sizes.sizes.size.url);
								}
							}
							res.render('creations/'+req.params.page, {message: req.params.id, creations:creations, flickr:photos[0].photos});
						}else{
							console.log(err);
							res.render('404');
						}
					});
				}else{
					console.log(err);
					res.render('404');
				}
			});
		}
	});
	app.get('/creations/social-pyle/:page',function(req, res){
		db.creations.find(function(err,creations){
			if(fs.existsSync('views/creations/social-pyle/'+req.params.page+'.ejs')){
				res.render('creations/social-pyle/'+req.params.page, {message: req.params.id});
			}else if(req.params.page === "sitemap.xml"){
				sitemap.toXML( function (xml) {
					res.header('Content-Type', 'application/xml');
					res.send( xml );
				});
			}else{
				res.render('404');
				console.log(err);
			}
		});
	});
	app.get('/creations/springsteen-law/:page',function(req, res){
		db.creations.find(function(err,creations){
			if(fs.existsSync('views/creations/springsteen-law/'+req.params.page+'.ejs')){
				res.render('creations/springsteen-law/'+req.params.page, {message: req.params.id});
			}else if(req.params.page === "sitemap.xml"){
				sitemap.toXML( function (xml) {
					res.header('Content-Type', 'application/xml');
					res.send( xml );
				});
			}else{
				res.render('404');
				console.log(err);
			}
		});
	});

	var sitemap = sm.createSitemap ({
		hostname: 'http://www.hollyspringsteen.com',
		cacheTime: 60000,        // 60 sec - cache purge period
		urls: [
			{ url: '/',  changefreq: 'daily', priority: 1.00 },
			{ url: '/creations/web-menu',  changefreq: 'daily',  priority: 0.9 },
			{ url: '/creations/photo-menu',  changefreq: 'daily',  priority: 0.9 },
			{ url: '/creations/graphic-menu',  changefreq: 'daily',  priority: 0.9 }
		]
	});
}