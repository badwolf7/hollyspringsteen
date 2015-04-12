// Connect MongoDB
var mongojs = require('mongojs');
var collections = ['creations','flickr'];
var db = mongojs('localhost:27017/hollyspringsteen',collections);

// Flickr setup
var Flickr = require('node-flickr');
var flickr_data = {
	user_id: '105154859@N08',
	key: '69cdbe7779a076e65fbfc39a005b9785',
	frob: '',
	token: '',
	secret: '55d0a2ef697e57c7'
};
var keys = {"api_key":flickr_data.key};
var flickr = new Flickr(keys);
// My Flickr profile
var hitomizu = {
	profile: {},
	photos:[],
	temp: {}
};

var photosDone,done = 0;

var ProgressBar = require('progress');
var bar,perc;

module.exports = function(){
	app.get('/flickr/build/profile', function(req,res){
		console.log('||=======================------------------------->>>>  Flickr Builder');
		res.redirect('/flickr/get/people/getInfo');
	});
	app.get('/flickr/get/people/getInfo', function(req,res){
		flickr.get("people.getInfo",{"user_id":flickr_data.user_id}, function(result){
			hitomizu.profile = result.person;
			hitomizu.profile.urls = {};
			console.log('people.getInfo');
			res.redirect('/flickr/get/urls/userPhotos');
		});
	});
	app.get('/flickr/get/urls/userPhotos', function(req,res){
		flickr.get("urls.getUserPhotos",{"user_id":flickr_data.user_id}, function(result){
			hitomizu.profile.urls.photos = result.user.url;
			console.log('urls.getUserPhotos');
			res.redirect('/flickr/get/urls/userProfile');
		});
	});
	app.get('/flickr/get/urls/userProfile', function(req,res){
		flickr.get("urls.getUserProfile",{"user_id":flickr_data.user_id}, function(result){
			hitomizu.profile.urls.profile = result.user.url;
			console.log('urls.getUserProfile');
			res.redirect('/flickr/get/people/getPhotos');
		});
	});
	
	app.get('/flickr/get/people/getPhotos', function(req,res){
		flickr.get("people.getPhotos",{"user_id":flickr_data.user_id}, function(result){
			// Defaults -  {page: 1, perpage: 100}
			hitomizu.temp = result.photos;
			photosDone = 1;
			console.log('people.getPhotos');
			if(photosDone){
				res.redirect('/flickr/get/photos/getInfo');
			}
		});
	});
	app.get('/flickr/get/photos/getInfo', function(req,res){
		console.log('get photo data');
		console.log(hitomizu.temp);
		bar = new ProgressBar(':bar',{total:hitomizu.temp.photo.length});
		var i = 0;
		function photoLoop(){
			setTimeout(function(){
				perc = Number(((i/hitomizu.temp.photo.length)*100).toFixed(1));
				console.log(' '+perc+'%');
				console.log(i+' of '+ hitomizu.temp.photo.length +' : '+ hitomizu.temp.photo[i].id +' - '+hitomizu.temp.photo[i].title+' : data processing ...');
				flickr.get("photos.getInfo",{"photo_id":hitomizu.temp.photo[i].id}, function(result){
					hitomizu.photos.push(result.photo);
					console.log('Finished: '+hitomizu.photos.length+' of '+hitomizu.temp.photo.length+' : '+result.photo.title._content);
					console.log();
					console.log('');
					i++;
					if(hitomizu.photos.length < hitomizu.temp.photo.length){
						bar.tick();
						photoLoop();
					}else if(hitomizu.photos.length == hitomizu.temp.photo.length){
						bar.tick();
						perc = Number(((i/hitomizu.temp.photo.length)*100).toFixed(1));
						console.log('Data '+perc+'%');
						res.redirect('/flickr/get/photos/sizes');
					}
				});
			}, 5);
		}
		photoLoop();
	});
	app.get('/flickr/get/photos/sizes', function(req,res){
		console.log('photo sizes');
		bar = new ProgressBar(':bar',{total:hitomizu.photos.length});
		var i = 0;
		function sizeLoop(){
			setTimeout(function(){
				perc = Number(((i/hitomizu.photos.length)*100).toFixed(1));
				console.log(' '+perc+'%');
				console.log(i+' of '+ hitomizu.photos.length +' : '+ hitomizu.photos[i].id +' - '+hitomizu.photos[i].title._content+' : sizes processing ...');
				flickr.get("photos.getSizes",{"photo_id":hitomizu.photos[i].id}, function(result){
					hitomizu.photos[i].sizes = result;
					console.log('Finished: '+i+' of '+hitomizu.photos.length+' : '+hitomizu.photos[i].title._content);
					console.log('');
					i++;
					if(i < hitomizu.photos.length){
						bar.tick();
						sizeLoop();
					}else{
						bar.tick();
						perc = Number(((i/hitomizu.photos.length)*100).toFixed(1));
						console.log('Sizes: '+perc+'%');
						res.redirect('/flickr/get/photos/comments/getList');
					}
				});
			}, 5);
		}
		sizeLoop();
	});
	app.get('/flickr/get/photos/comments/getList', function(req,res){
		console.log('photo comments');
		bar = new ProgressBar(':bar',{total:hitomizu.photos.length});
		var i = 0;
		function commentLoop(){
			setTimeout(function(){
				perc = Number(((i/hitomizu.photos.length)*100).toFixed(1));
				console.log(' '+perc+'%');
				console.log(i+' of '+ hitomizu.photos.length +' : '+ hitomizu.photos[i].id +' - '+hitomizu.photos[i].title._content+' : comments processing ...');
				flickr.get("photos.comments.getList",{"photo_id":hitomizu.photos[i].id}, function(result){
					hitomizu.photos[i].comments = [];
					hitomizu.photos[i].comments = result.comments.comment;
					console.log('Finished: '+i+' of '+hitomizu.photos.length+' : '+hitomizu.photos[i].title._content);
					console.log('');
					i++;
					if(i < hitomizu.photos.length){
						bar.tick();
						commentLoop();
					}else{
						bar.tick();
						perc = Number(((i/hitomizu.photos.length)*100).toFixed(1));
						console.log('Comments: '+perc+'%');
						res.redirect('/flickr/get/photos/getExif');
					}
				});
			}, 5);
		}
		commentLoop();
	});
	app.get('/flickr/get/photos/getExif', function(req,res){
		console.log('photo exif');
		bar = new ProgressBar(':bar',{total:hitomizu.photos.length});
		var i = 0;
		function exifLoop(){
			setTimeout(function(){
				perc = Number(((i/hitomizu.photos.length)*100).toFixed(1));
				console.log(' '+perc+'%');
				console.log(i+' of '+ hitomizu.photos.length +' : '+ hitomizu.photos[i].id +' - '+hitomizu.photos[i].title._content+' : exif processing ...');
				flickr.get("photos.getExif",{"photo_id":hitomizu.photos[i].id}, function(result){
					hitomizu.photos[i].exif = [];
					hitomizu.photos[i].exif = result.photo.exif;
					console.log('Finished: '+i+' of '+hitomizu.photos.length+' : '+hitomizu.photos[i].title._content);
					console.log('');
					i++;
					if(i < hitomizu.photos.length){
						bar.tick();
						exifLoop();
					}else{
						bar.tick();
						perc = Number(((i/hitomizu.photos.length)*100).toFixed(1));
						console.log('Exif: '+perc+'%');
						res.redirect('/flickr/get/photos/getFavorites');
					}
				});
			}, 5);
		}
		exifLoop();
	});
	app.get('/flickr/get/photos/getFavorites', function(req,res){
		console.log('photo favorites');
		bar = new ProgressBar(':bar',{total:hitomizu.photos.length});
		var i = 0;
		function exifLoop(){
			setTimeout(function(){
				perc = Number(((i/hitomizu.photos.length)*100).toFixed(1));
				console.log(' '+perc+'%');
				console.log(i+' of '+ hitomizu.photos.length +' : '+ hitomizu.photos[i].id +' - '+hitomizu.photos[i].title._content+' : favorites processing ...');
				flickr.get("photos.getFavorites",{"photo_id":hitomizu.photos[i].id}, function(result){
					hitomizu.photos[i].favorites = [];
					hitomizu.photos[i].favorites = result.photo.person;
					console.log('Finished: '+i+' of '+hitomizu.photos.length+' : '+hitomizu.photos[i].title._content);
					console.log('');
					i++;
					if(i < hitomizu.photos.length){
						bar.tick();
						exifLoop();
					}else{
						bar.tick();
						perc = Number(((i/hitomizu.photos.length)*100).toFixed(1));
						console.log('Favorites: '+perc+'%');
						res.redirect('/flickr/display/profile');
					}
				});
			}, 5);
		}
		exifLoop();
	});
	app.get('/flickr/display/profile', function(req,res){
		if(hitomizu.temp.photo !== undefined){
			if(hitomizu.photos.length == hitomizu.temp.photo.length){
				console.log('');
				console.log('');
				console.log('photos compiled');
				delete hitomizu.temp;
				db.flickr.remove({});
				db.flickr.insert(hitomizu,function(err,result){
					if(err) throw err;
					console.log(result);
					res.json(hitomizu);
				});
			}
		}
	});

	app.get('/db/get/flickr', function(req,res){
		db.flickr.find({"photos.media":"photo"},function(err,photos){
			if(err) throw err;
			res.json(photos);
		});
	});
};

