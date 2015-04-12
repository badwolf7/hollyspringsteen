function ajax(){
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

	function reset(){
		$('.msgs').empty();
		$('.loginPass input').val('');
		$('.loginPass').hide();
		$('p.text-danger').remove();
		$('.loginUser input').val('');
		$('.loginUser input').prop('disabled',false);
		$('.loginUser input').focus();
	}

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

	$('.loginUser').submit(function(e){
		e.preventDefault();
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
			type: 'GET',
			url: '/login/user',
			dataType: 'json',
			data: data,
			success: function(result){
				console.log('user success');
				console.log(result);
				$(".loginPass").show();
				$('.loginUser input').prop('disabled',true);
				$('.loginPass input').prop('disabled',false);
				setTimeout(function(){$(".loginPass input").focus();},500);
			},
			error: function(err){
				console.log('user fail');
				console.log(err);
				$('.loginUser input').val('');
				$('.loginUser').append('<p class="text-danger">user does not exist</p>');
				$('.loginUser input').focus();
			}
		});
	}
	function loginPass(data){
		$("*").unbind();

		$.ajax({
			type: 'GET',
			url: '/login/pass',
			dataType: 'json',
			data: data,
			success: function(result){
				console.log('password success');
				console.log(result);
				$('.loginPass input').prop('disabled',true);
				$('.msgs').append(loginSuccess);
				setTimeout(function(){
					reset();
				}, 3000);
			},
			error: function(err){
				console.log('password fail');
				console.log(err);
				$('.msgs').append(loginFail);
				setTimeout(function(){
					reset();
				}, 3000);
			}
		});
	}
}
$(document).on('ready ajaxComplete',function(){
	console.log('2');
	ajax();
});