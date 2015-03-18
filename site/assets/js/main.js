window.onload = function(){
	if($('main').hasClass('home')){
		$('#headerPush').css({
			'display':'none'
		});
		$('footer').css({
			'margin-top':'0'
		});

		// For projects - limit shown projects to only 4
		var wprojects = $('.bg-2 .web ul li').toArray();
		var gprojects = $('.bg-2 .graphic ul li').toArray();
		var pprojects = $('.bg-2 .photo ul li').toArray();
		var wshowListItems = wprojects.splice(0, 4);
		var gshowListItems = gprojects.splice(0, 4);
		var pshowListItems = pprojects.splice(0, 4);

		$(wprojects).hide();
		$(gprojects).hide();
		$(pprojects).hide();
		$(wshowListItems).show();
		$(gshowListItems).show();
		$(pshowListItems).show();
	}
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
	$('.fa-github').click(function(){
		window.open('http://www.github.com/badwolf7');
	});

	
	////////////////////////////// SCROLL HINT
	//////////////////////////////////////////
	// Let's the user know to scroll down for more, useful for shorter screens
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
		if($('main').hasClass('home')){
			headerColor();
		}
	}

	//////////////////////// HEADER TRANSITION
	//////////////////////////////////////////
	$('h1').click(function(){
		window.location = '/';
	});
	function headerColor(){
		if ($(window).scrollTop() > 25){
			$('.upper').addClass('lower');
			$('.upper').removeClass('upper');
		}else{
			$('.lower').addClass('upper');
			$('.lower').removeClass('lower');
		}
	}
	var headerHeight = $('header').height();
	if($('main').hasClass('home')){
		headerColor();
	}else{
		$('#headerPush').css({
			'height':headerHeight
		});
		$('.upper').addClass('lower');
		$('.upper').removeClass('upper');
		$('body').css({
			'background': '#FFFAFA'
		});
		function headerShadow(){
			if ($(window).scrollTop() > 25){
				$('.lower').css({
					'box-shadow':'0 2px 3px rgba(22,22,22,.22)'
				});
			}else{
				$('.lower').css({
					'box-shadow':'none'
				});
			}
		}
		headerShadow();
		window.onscroll = function(){
			headerShadow();
		}
	}

	/////////////// PORTFOLIO SECTION SELECTOR
	//////////////////////////////////////////
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

	/////////////////////////////// MOBILE NAV
	//////////////////////////////////////////
	mobileIn = 1;
	$('.menu-icon').click(function(){
		if(mobileIn){
			$('.mobile-nav').css({
				'right':'0'
			});
			$('.menu-icon .fa').addClass('glyphicon glyphicon-arrow-right');
			$('.menu-icon .fa').removeClass('fa fa-bars');
			$('.mobile-search').val('');
			mobileIn = 0;
		}else{
			$('.mobile-nav').css({
				'right':'-292px'
			});
			$('.menu-icon .glyphicon').addClass('fa fa-bars');
			$('.menu-icon .glyphicon').removeClass('glyphicon glyphicon-arrow-right');
			$('.mobile-search').val('');
			mobileIn = 1;
		}
	});

	/////////////////////////// CREATIONS MENU
	//////////////////////////////////////////
	$('.codeDependencies').each(function(){
		var totalDependencies = $(this).children('ul').children('li').length,
			liWidth = 100/totalDependencies+'%';
		$(this).children('ul').children('li').css({
			'width':liWidth
		});
	});
	$('.codeDependencies ul li img').each(function(){
		var imgHeight = $(this).height(),
			imgMargin = (65 - imgHeight) / 2 +'px'
		$(this).css({
			'margin-top': imgMargin
		})
	});

	//////////////////////// EXPANDING SEARCH
	/////////////////////////////////////////
	var expanded = 0;
	$('.search button').click(function(e){
		if($(this).attr('type') == 'button'){
			e.preventDefault();
			$('.search input').css({
				'width':'400px',
				'right':'81px',
				'z-index':'5',
				'visibility':'visible'
			});
			$('.search button').prop('type','submit');
			expanded = 1;
		}else{
			if($('.search input').val() == ''){
				e.preventDefault();
				$('.search input').css({
					'width':'0',
					'right':'0',
					'z-index':'-2',
					'visibility':'hidden'
				});
				$('.search button').prop('type','button');
				expanded = 0;
			}
		}
	});
	$('.search button').hover(function(){
		if(expanded && $('.search input').val() == ''){
			$(this).addClass('glyphicon-arrow-right')
			$(this).removeClass('glyphicon-search');
		}
	},function(){
		$(this).addClass('glyphicon-search');
		$(this).removeClass('glyphicon-arrow-right')
	});
	
};
