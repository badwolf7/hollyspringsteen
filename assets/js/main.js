window.onload = function(){
	/////////////////////////////////// SOCIAL
	//////////////////////////////////////////
	$('.fa-google-plus').click(function(){
		window.open('https://plus.google.com/103393744901035790473/about');
	});
	$('.fa-facebook').click(function(){
		window.open('https://www.facebook.com/springsteen1');
	});
	$('.fa-flickr').click(function(){
		window.open('https://www.flickr.com/photos/hitomizu');
	});
	$('.fa-instagram').click(function(){
		window.open('http://instagram.com/raris13');
	});
	$('.fa-linkedin').click(function(){
		window.open('http://www.linkedin.com/in/hhspringsteen/');
	});

	
	////////////////////////////// SCROLL HINT
	//////////////////////////////////////////
	function scrollHint(){
		if ($(window).scrollTop() == 0){
			var scrollHont = setTimeout(function(){
				$('.scroll-hint').css({
					'transition':'opacity .5s ease',
					'visibility':'visible',
					'opacity': '1',
					'z-index': '2'
				});
			}, 2000);
		}else{
			clearTimeout(scrollHint);
			$('.scroll-hint').css({
				'transition':'opacity .5s ease',
				'visibility':'hidden',
				'opacity': '0',
				'z-index': '-2'
			});
		}
	}
	if($(window).width() > 1235){
		scrollHint();
	}
	window.onscroll = function(){
		scrollHint();
		headerColor();
	}

	function headerColor(){
		if ($(window).scrollTop() > 25){
			$('header').css({
				'box-shadow': '0 2px 2px rgba(22,22,22,.22)',
				'background': '#FFFAFA'
			});
			$('header h1').css({
				'color':'#141823'
			});
			$('header a:not(nav ul ul a)').css({
				'color':'#141823'
			});
			$('header .creations').css({
				'background': '#23B5AF'
			});
			$('header .creations a:not(nav ul ul a)').css({
				'color': '#FFFAFA'
			});
			$('header .creations a:not(nav ul ul a)').hover(function(){
				$(this).css({
					'color': '#141823'
				});
			}, function(){
				$(this).css({
					'color': '#FFFAFA'
				});
			});
			$('header .search').css({
				'background': '#3B5998'
			});
			$('header .search a').css({
				'color': '#FFFAFA'
			});
		}else{
			$('header').css({
				'box-shadow': 'none',
				'background': 'none'
			});
			$('header h1').css({
				'color':'#FFFAFA'
			});
			$('header a').css({
				'color':'#FFFAFA'
			});
			$('header .creations').css({
				'background': 'none'
			});
			$('header .search').css({
				'background': 'none'
			});
		}
	}
	headerColor();

	$('.graphicMenu').click(function(){
		$('.homePortMenu').removeClass('active');
		$(this).addClass('active');
		$('.homePortfolio').removeClass('active');
		$('.graphic').addClass('active');
	});
	$('.webMenu').click(function(){
		$('.homePortMenu').removeClass('active');
		$(this).addClass('active');
		$('.homePortfolio').removeClass('active');
		$('.web').addClass('active');
	});
	$('.photoMenu').click(function(){
		$('.homePortMenu').removeClass('active');
		$(this).addClass('active');
		$('.homePortfolio').removeClass('active');
		$('.photo').addClass('active');
	});

	window.onresize = function(){
		var windowHeight = window.outerHeight,
			windowWidth = window.outerWidth;
		if(windowWidth > 1235){
			scrollHint();
		}
	}
};
