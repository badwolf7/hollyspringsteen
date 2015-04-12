
var loginFail = '<p>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>'+
		'@ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WARNING: POSSIBLE DNS SPOOFING DETECTED! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@<br>'+
		'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>'+
		'The RSA host key has changed,<br>'+
		'and the key is unchanged. This could either mean that<br>'+
		'DNS SPOOFING is happening or the IP address for the host<br>'+
		'and its host key have changed at the same time.<br>'+
		'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>'+
		'@ &nbsp;&nbsp;&nbsp;WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! &nbsp;&nbsp;&nbsp;&nbsp;@<br>'+
		'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>'+
		'IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!<br>'+
		'Someone could be eavesdropping on you right now (man-in-the-middle attack)!<br>'+
		'It is also possible that a host key has just been changed.<br>'+
		'Please contact your system administrator.<br>'+
		'Add correct host key to get rid of this message.<br>'+
		'RSA host key for hollyspringsteen.com has changed and you have requested strict checking.<br>'+
		'Host key verification failed.</p>';
var loginSuccess = '<p>Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-32-generic x86_64)<br><br>'+
		'* Documentation: &nbsp;https://help.ubuntu.com/<br><br>'+
		'Graph this data and manage this system at:<br>'+
		'https://landscape.canonical.com/<br><br>'+
		'129 packages can be updated.<br>'+
		'70 updates are security updates.<br><br>'+
		'Last login: Mon Mar 30 19:23:23 2015</p>';
var user, pass, hash = '';

// serialize incoming objects
$.fn.serializeObject = function(){
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

console.log('ajax');

$('.loginUser').submit(function(e){
	e.preventDefault();
	console.log('user');
	loginUser($(this).serializeObject());
});
$('.loginPass').submit(function(e){
	e.preventDefault();
	loginPass($(this).serializeObject());
});

function loginUser(data){
	// data format = {user: "username"}
	user = data;
	$("*").unbind();
	$.ajax({
		type: 'POST',
		url: '/login/user',
		dataType: 'json',
		data: data,
		success: function(result){
			console.log(result);
			$(".loginPass").show();
			$('.loginUser input').prop('disabled',true);
		},
		error: function(err){
			console.log(err);
			$('.loginUser input').val('');
		}
	});
}
function loginPass(data){
	$("*").unbind();
	$.ajax({
		type: 'POST',
		url: '/login/pass',
		dataType: 'json',
		data: data,
		success: function(result){
			console.log(result);
			$('.loginPass input').prop('disabled',true);
			$('.msgs').append(loginSuccess);
		},
		error: function(err){
			console.log(err);
			$('.msgs').append(loginFail);
		}
	});
}
