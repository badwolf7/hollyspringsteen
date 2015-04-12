// Auth for login
var user, pass, salt, hash;

module.exports = function(){
	app.get('/login/user', function(req,res){
		user = req.query.user;
		console.log(user);

		if(user == 'test'){
			res.json(req.query);
		}else{
			res.send('dne');
		}
	});
	app.get('/login/pass', function(req,res){
		pass = req.query.pass;
		console.log(pass);
		console.log(req.query);

		if(pass == 'test'){
			res.json(req.query);
		}else{
			res.send('dne');
		}
	});
};