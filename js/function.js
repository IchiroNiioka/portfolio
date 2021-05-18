$(function(){
	/*** スムーススクロール ***/
	$('a[href^="#"]').click(function(){
		let speed = 500;
		let href= $(this).attr("href");
		let target = $(href == "#" || href == "" ? 'html' : href);
		let position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	/*** スクロール時のアニメーション ***/
	$(window).on('load scroll',function (){
		var scroll = $(window).scrollTop();			//ウィンドウの高さを取得
		var height = $(window).height();			//ターゲットまでスクロールするとフェードインする
		$('.fadeIn').each(function(){			//ターゲットの位置を取得
			var target = $(this).offset().top;			//スクロール量を取得
			if (scroll > target - height){				//クラスを付与
				$(this).addClass('fadeInActive');
			}
		});
		$('.logoSymbol2').each(function(){			//ターゲットの位置を取得
			var target = $(this).offset().top;			//スクロール量を取得
			if (scroll > target - height){				//クラスを付与
				$(this).addClass('logoSymbol2Active');
			}
		});
		$('.textProfileSkills').each(function(){
			var target = $(this).offset().top;
			if (scroll > target - height){
				$('.skillHand').addClass('skillHandActive');
				$('.skillLine').addClass('skillLineActive');
				$('.skillFlyer').addClass('boxSkillIllustsActive');
				$('.skillCamera').addClass('boxSkillIllustsActive');
				$('.skillEdit').addClass('boxSkillIllustsActive');
				$('.skillPc').addClass('boxSkillIllustsActive');
				$('.skillSpeaker').addClass('boxSkillIllustsActive');
			}
		});
		$('.textPhilosophy').each(function(){
			var target = $(this).offset().top;
			if (scroll > target - height){
				$('.imgPhilosophy01').css('opacity', '.2');
				setTimeout(function(){$('.imgPhilosophy02').css('opacity', '.2');},100);
				setTimeout(function(){	$('.imgPhilosophy03').css('opacity', '.2');},200);
				setTimeout(function(){	$('.imgPhilosophy04').css('opacity', '.2');},300);
				setTimeout(function(){	$('.imgPhilosophy05').css('opacity', '.2');},400);
				setTimeout(function(){	$('.imgPhilosophy06').css('opacity', '.2');},500);
				setTimeout(function(){	$('.imgPhilosophy07').css('opacity', '.2');},600);
				setTimeout(function(){	$('.imgPhilosophy08').css('opacity', '.2');},700);
				setTimeout(function(){	$('.imgPhilosophy09').css('opacity', '.2');},800);
				setTimeout(function(){	$('.imgPhilosophy10').css('opacity', '.2');},900);
				setTimeout(function(){	$('.imgPhilosophy11').css('opacity', '.2');},1000);
				setTimeout(function(){	$('.imgPhilosophy12').css('opacity', '.2');},1100);
			}
		});
		$('.underline').each(function(){			//ターゲットの位置を取得
			var target = $(this).offset().top;			//スクロール量を取得
			var scroll = $(window).scrollTop();			//ウィンドウの高さを取得
			var height = $(window).height();			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){				//クラスを付与
				$('.underline:after').css('width', '100%');
				 $('head').append('<style>.underline:after { width: 100%; } </style>');
			}
		});
	});
});

