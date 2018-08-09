$(function() {

		function getRandomInt(min, max){
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}

	var $menuLinks = $('.header-top nav a');
			$menuLinks.click(function(e){
				e.preventDefault();
				if($('.statistic').length > 0){
					var statisticHeight = $('.statistic').height();
					console.log('height ' + statisticHeight);
				}
				var location = $(this).attr('href'), //секция с id, равным href текущей ссылки
					sectionCoord = $(location).offset().top - statisticHeight;

					if(location == '#free-part'){
						sectionCoord += 30;
					}
				$('html, body').animate({scrollTop: sectionCoord }, 800);
			});

	$(document).ready(function() {

		// assortment-visual click disable
			
				// $('.assortment-visual').click(function() {
				// 	if(screen.width < 1200){
					
				// 		return false;
				// 		}
				// });
				
			
		// end assortment-visual click disable

		// assortment hover detect
			var isMobile = {
				Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
				BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
				iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
				Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
				any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
			};

			
				var touchHover = function() {
					$('[data-hover]').click(function(e){
						e.preventDefault();
						var $this = $(this);
						var onHover = $this.attr('data-hover');
						var linkHref = $this.attr('href');
						if (linkHref && $this.hasClass(onHover)) {
							location.href = linkHref;
							return false;
						}
						$this.toggleClass(onHover);
						$this
							.closest('.assortment-item')
							.siblings()
							.find('[data-hover]')
							.removeClass(onHover);

					});
				};

				if ( isMobile.any() ) {
					 touchHover();
	  		}
		// assortment hover detect

		// slick

			var $slickProduce = $('.produce-slider').slick({
				fade: true,
				autoplay: true,
				arrows: false,
				autoplaySpeed: 5000
			});

			$('.produce__slider-thumbs img').click(function() {
				console.log($(this).attr('data-slide'));
				$slickProduce.slick('slickGoTo', $(this).attr('data-slide') - 1);
			});

			var $slickClients = $('.clients-slider').slick({
				fade: true,
				autoplay: true,
				arrows: false,
				autoplaySpeed: 15000
				// adaptiveHeight: true
			});

			$('.clients-nav__item').click(function() {
				var $th = $(this);
				$th.addClass('active').siblings().removeClass('active');
				$slickClients.slick('slickGoTo', $th.index());
			});

			$slickClients.on('afterChange', function(event, slick, currentSlide, nextSlide){
				$('.clients-nav__item').eq(currentSlide)
										.addClass('active')
										.siblings()
										.removeClass('active');
			});
		// end slick

		// tooltipster
			$('.tooltip__header-phone').tooltipster({
				side: 'right',
				// trigger: 'click',
				maxWidth: 161,
				delay: 0,
				contentAsHTML: true,
				functionReady: function(instance, helper) {
					// console.log(helper.tooltip);
					helper.tooltip.classList.add('header-phone-tip');
				}
			});

			$('.tooltip__h1-tip').tooltipster({
				side: ['right', 'bottom'],
				// trigger: 'click',
				maxWidth: 275,
				delay: 150,
				contentAsHTML: true,
				contentCloning: true,
				functionReady: function(instance, helper) {
	
					helper.tooltip.classList.add('header-title-tip');
				},
				functionPosition: function(instance, helper, position) {
					   // var container = helper.origin,
				    //     	containerTop = container.getBoundingClientRect().top,
				    //     	containerHeight = container.offsetHeight;

				    //     var summ = containerTop + containerHeight;
				      
				    //     position.coord.top = summ - position.size.height;

				    //     return position;
				}
			});

			$('.tooltip-powder').tooltipster({
				// trigger: 'click',
				side: ['bottom', 'top'],
				maxWidth: 416,
				interactive: true,
				delay: [150, 150],
				functionReady: function(instance, helper) {
	
					helper.tooltip.classList.add('powder-tip');
				}
			});

			$('.ques-icon').tooltipster({
				// trigger: 'click',
				 trigger: 'custom',
				 triggerOpen: {
				 	mouseenter: true,
				 	tap: true
				 },
				 triggerClose: {
				 	click: true,
				 	scroll: true,
				 	tap: true
				 },
				side: 'right',
				maxWidth: 232,
				delay: 150,
				functionReady: function(instance, helper) {
	
					helper.tooltip.classList.add('ques-icon-tip');
				}
			});

			$('.kvis-item__ques').tooltipster({
				// trigger: 'click',
				side: ['top'],
				distance: -20,
				arrow: false,
				delay: 150,
				contentCloning: true,
				// maxWidth: 232,
				functionBefore: function(instance, helper) {
					if(screen.width < 960){
						return false;
					}
				},
				functionReady: function(instance, helper) {
	
					helper.tooltip.classList.add('kviz-item-tip');
				}
			});
			
			$('.button-popup').tooltipster({
				// trigger: 'click',
				side: ['bottom'],
				delay: 150,
				contentCloning: true,
				maxWidth: 275,
				interactive: true,
				functionReady: function(instance, helper) {
	
					helper.tooltip.classList.add('header-download-tip');
				}
			});


		// end tooltipster

		// ikSelect
			$('.calls-list').ikSelect({
				autoWidth: false,
				onShow: function (inst) {
					// console.log(inst.el);
					console.log($(inst.el).width());
					var currWidth = $('.ik_select').width();
					$('.ik_select_dropdown').width(currWidth);
				}
			});
		// end ikSelect


		// magnific popup
				var $toSubscribePopup = $('.tooltip__header-phone, .button-popup, .popup-catalog, .popup-quality, .button-empty--present, .call-order, .statistic-button--calc').magnificPopup({
					type: 'inline',
					preloader: false,
					focus: '#name',

				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}

					},

					 open: function() {
					    toggleGlioFlag('disable');
						 // console.log('mag-content ' + this.st.el.attr('class')); //кнопка
						 // console.log(this.content.find('form').attr('class'));//форма
						 var $hiddenInput = $('<input>', {
						 		type: 'hidden',
						 		value: this.st.el.attr('data-hidden-name'),
						 		class: 'form-submit-name',
						 		name: 'form-name'
						 });

						 console.log($hiddenInput);

						 this.content.find('form').prepend($hiddenInput);

					  },

					  close: function() {
					    toggleGlioFlag('anable');
					    this.content.find('.form-submit-name').remove();
					    // glioInit();
					    // console.log(glio.statusTop);
					    // glio.start();
					  }
				}
			});

		// end magnific popup

		// glio

		var glioFlag = true;

		function toggleGlioFlag(popupPosition) {
			if(popupPosition == 'disable'){
				glioFlag = false;
			}else{
				glioFlag = true;
			}
			console.log('flag ' + glioFlag);
		}
		

		function glioInit(){
			console.log('glioInit!!!');
			glio.init(
				[ 'top', mouseOfScreen],
				[ 'top-left', mouseOfScreen],
				[ 'top-right', mouseOfScreen],
				[ 'bottom-right', mouseOfScreen],
				[ 'bottom', mouseOfScreen] 
			);
		}
		glioInit();

		function mouseOfScreen(){
			console.log('offscreen');
			if(glioFlag == true && $('.no-mouseout-popup').length == 0){

				$.magnificPopup.open({
					items: {
						src: $('.poup-mouse-out')
					},
					type: 'inline',
					callbacks: {
						open: function() {

						  },

						  close: function() {
						  }
						
					}

				  // You may add options here, they're exactly the same as for $.fn.magnificPopup call
				  // Note that some settings that rely on click event (like disableOn or midClick) will not work here
				}, 0);

				setTimeout(function() {
					$.magnificPopup.close();
				}, 15000);
			}else{
				return;
			}
		}
		// end of glio

		// map click
			$('.map-item').click(function() {
				$(this).addClass('active')
						.siblings()
						.removeClass('active');

				return false;
			});
		// end map click

		// form valid
		function Validate(){

		  this.init = function(){

		    valid.regListeners();
		  };
		  this.regListeners = function(){

		    $('.to-validate-form').on('submit', valid.formSubmit);
		    $('.to-validate-form input[type="text"]').on('keydown', valid.inputKeyDown);
		    $('.to-validate-form input[type="text"]').on('focusout', valid.inputFocusOut);
		    
		  };
		  this.formSubmit = function(e){
		   console.log('skotnik');
		    
		    if(valid.formValidate($(this)) == false){
		     return false;
		    }
		  //   var th = $(this);

		  // 		$.ajax({
		  // 			type: "POST",
				// 	url: "mail.php", //Change
				// 	data: th.serialize()
				// }).done(function() {
					// alert("Thank you!");
					// setTimeout(function() {
					// 	$.magnificPopup.open({
					// 		items: {
					// 			src: $('.email-popup')
					// 		},
					// 		type: 'inline',
					// 		mainClass: 'email-modal',
					// 		showCloseBtn: false,
					// 		callbacks: {
					// 			beforeOpen: function() {
					// 				if($(window).width() < 700) {
					// 					this.st.focus = false;
					// 				} else {
					// 					this.st.focus = '#name';
					// 				}
									
					// 			},

					// 			open: function(){
					// 				$('.email-popup .button').bind('click', poupClose);
					// 				$('body').css('overflow-x', 'visible');
					// 			},

					// 			close: function(){
					// 				$('.email-popup .button').unbind('click', poupClose);
					// 				$('body').css('overflow-x', 'hidden');
									
					// 			}
					// 		}
					// 	});

						
					// 	th.trigger("reset");
					// }, 1000);
				// });
				return true;
		   
		   
		  };

		  this.formValidate = function($form){
		    var validation = true;
		    var $inputs = $form.find('input'),
		    		$inputPhone = $form.find('input[name="phone"]'),
		    		$inputMail = $form.find('input[name="mail"]');
		 		      
	      if($inputPhone.val() !== '' || $inputMail.val() !== ''){
	      	return validation;
	      }else{
	      	$inputs.each(function(index, elem){
			      var $input = $(elem);
			      
			      if($input.val() == '' && $input.attr('name') !== 'name'){
			        validation = false;
			        valid.createTooltip($input);
			      }
			      
			    });
	      	
	      }
	      
		      
		    
		    return validation;
		  
		  },
		  
		  this.createTooltip = function($toolParent){

		  	// $toolParent.addClass('invalid');
		  	$toolParent.closest('label').addClass('invalid');
		  };
		  
		  this.inputKeyDown = function(){
		    // $(this).removeClass('invalid');
		    $(this).closest('label').removeClass('invalid');

		  };

		  this.inputFocusOut = function(){
		  	// if($(this).val() == "") valid.createTooltip($(this));
		  };
		  
		}
		// var valid = new Validate();
		// valid.init();

		$('.to-subscribe-form, .to-validate-form').submit(function() {
			// $(this).submit();
			// console.log('to-subscribe submited');
			var $th = $(this);
			setTimeout(function() {
		        document.location.href = 'subscribe.html';
		    }, 100);
	    	// $th.submit();

		    return false;
		});
		
		
	// end of form valid

		// divScroll
			var $divScroller = $(".produce__slider-thumbs").smoothDivScroll({
				autoScrollingMode: "onStart"
			});

			$(window).resize(function() {
				$divScroller.smoothDivScroll("recalculateScrollableArea"); 
			});
		// end divScroll

		// slider random titles
			var $fadeTitles = $('.produce-slogans li');
			setInterval(function() {
				 $fadeTitles.eq(getRandomInt(0, 4)).fadeIn().siblings().fadeOut();
					// console.log($fadeTitles.eq(getRandomInt(1, 6)));
				}, 4000);

		// end slider random titles
	});


	// statistic click
		$('.statistic-logo').click(function() {
			$('html, body').animate({scrollTop: 0}, 800);
		});
	// end statistic click

	// assortment-pointer click
		$('.assortment-pointer').click(function() {
			var assortScrollHeight = $('.assortment-content').offset().top;
			$('html, body').animate({scrollTop: assortScrollHeight + 45 }, 800);

		});
	// end assortment-pointer click

	// statistic dynamic
		function statDinamic() {

			var $mounthField = $('.statistic-item--fabricated .statistic-val'),
				$warehouseField = $('.statistic-item--warehouse .statistic-val'),
				__self = this,
				mounthInterval,
				warehouseInterval,
				comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

			this.init = function() {
				console.log('statIbit');
				this.valsMounthInterval();
				this.valsWarehouseInterval();
			},

			this.mounthHandler = function() {
				$mounthField.text()
			},

			this.valsMounthInterval = function() {
				mounthInterval = setInterval(function() {
					__self.valsAnimate($mounthField, 0, 4, 2000);
				}, 120000);//120000
			},

			this.valsWarehouseInterval = function() {
				warehouseInterval = setInterval(function() {
					__self.valsAnimate($warehouseField, -4740, 400, 6000);
				}, 300000);//300000
			},

			this.delSpaces = function(str) {
				
				str = str.replace(/\s/g, '');
				return str;
			},

			this.valsAnimate = function(item, min, max, time) {
				var startNum = item.text(),
					startNumClear = this.delSpaces(startNum),
					currentNum = 0;
				if(min == 0){
					currentNum += 4;
				}else{
					currentNum += getRandomInt(min, max);
				}

				var finalNum = +startNumClear + currentNum;

				if(item.closest('.statistic-item').hasClass('statistic-item--fabricated') && finalNum > 14210){
					finalNum = 14210;
					clearInterval(mounthInterval);
				}

				if(item.closest('.statistic-item').hasClass('statistic-item--warehouse') && finalNum < 23459){
					finalNum = 23459;
					clearInterval(warehouseInterval);
				}

				this.fildsColorize(item, time);

				item.prop('number', startNumClear).animateNumber({
					number: finalNum,
					numberStep: comma_separator_number_step
				},{
					duration: time,
					easing: 'swing'
				});
			},

			this.fildsColorize = function(item, delay) {
				item.addClass('stat-num-active');
				setTimeout(function() {
					item.removeClass('stat-num-active');
				}, delay);
			}
		}

		var statCalc = new statDinamic();
		
	// end statistic dynamic

	// favorites popup
		function favPopup() {

			var $favPop = $('.statistic-button__popup'),
				$favPopParent = $favPop.parent(),
				$favPopClose = $('.statistic-button__close'),
				closer,
				returner,
				__self = this;

			this.init = function() {
				console.log('favPopu.init');
				console.log($favPopParent.eq(0));
				this.startTimer();
				this.returnTimer();
				// this.closeTimer();
				this.eventsReg();

			},

			this.eventsReg = function() {
				$favPopClose.on('click', this.handleClose);
				$favPop.on('click', this.popupClick);
				$(document).on('mouseup', this.clickOut);
				$favPopParent.on('mouseenter', this.hoverIn);
				$favPopParent.on('mouseleave', this.hoverOut);
				$favPopParent.on('click', this.favorClick);
			},

			this.popupClick = function(e) {
				console.log(e.target.className);
				if(e.target.className == "statistic-button__close"){
					$favPop.fadeOut();
					
					return false;
				}else{
					return false;
				}
			}

			this.favorClick = function() {
				clearTimeout(closer);
				clearInterval(returner);
				$favPop.fadeOut();
				// $favPopParent.off('hover');
			},

			this.hoverIn = function() {
				$favPop.fadeIn();
				console.log('hoverIn');
				clearTimeout(closer);
				clearInterval(closer);
			}

			this.hoverOut = function() {
				console.log('hoverOut');
				$favPop.fadeOut();	
				// __self.returnTimer();
				clearInterval(returner);
			}

			this.clickOut = function(e) {
				if(!$favPopParent.is(e.target) && $favPopParent.has(e.target).length === 0){
					$favPop.fadeOut();
				}
			},

			this.handleClose = function(e) {
				e.preventDefault();
				$favPop.fadeOut();
				clearTimeout(closer);
			}

			this.startTimer = function() {
				var start = setTimeout(function() {
					$favPop.fadeIn();
					__self.closeTimer();

				}, 5000);
			},

			this.returnTimer = function() {
				returner = setInterval(function() {
					$favPop.fadeIn();
					__self.closeTimer();
				}, 10000);
			},

			this.closeTimer = function() {
				closer = setTimeout(function() {
					$favPop.fadeOut();
				}, 5000);
			},

			this.show = function() {
				$favPop.fadeIn();
			}

		}
		var favPopup = new favPopup();
		
	// end favorites popup

	// to favorites
	console.log('favn ' + $('#fav').length);
	if($('#fav').length > 0 && screen.width > 1200){

		fav.addEventListener('click', function(e) {
			return add_favorite(this);
		});
		favPopup.init();
		favPopup.show();
		// statCalc.init();
	}

		function add_favorite(a) {
			title=document.title;
			url=document.location;
			try {
			    // Internet Explorer
			    window.external.AddFavorite(url, title);
			}
			catch (e) {
				try {
			      // Mozilla
			      window.sidebar.addPanel(title, url, "");
			  }
			  catch (e) {
			      // Opera и Firefox 23+
			      if (typeof(opera)=="object" || window.sidebar) {
			      	a.rel="sidebar";
			      	a.title=title;
			      	a.url=url;
			      	a.href=url;
			      	return true;
			      }
			      else {
			        // Unknown
			        alert('Нажмите Ctrl-D чтобы добавить страницу в закладки');
			    }
			}
			}
			return false;
}
	// end to favorites

	// statistic fixed
		var $statBlock = $('.statistic'),
			statCalcAnable = true;

		if($statBlock.length > 0){
			var deadline;
			if($('.assortment-content').length > 0){
				deadline = $('.assortment-content').offset().top - 200;
			}else{
				deadline = $('.free-part').offset().top
			}
			
			// var freePartTop = $('.free-part').offset().top;

			$(document).scroll(function() {
				if($(this).scrollTop() > deadline && screen.width > 1200){
					$statBlock.addClass('statistic-fixed');
					if(statCalcAnable == true){
						statCalc.init();
						statCalcAnable = false;
					}
				}else{
					$statBlock.removeClass('statistic-fixed');
				}
			});
		}
	// end statistic fixed

	// kviz
			function Kviz(){

					var __self = this;
					var count = 1;
					var currentKviz;
					var $partOf = $('.of');
					var $percentsOf = $('.of-percents');
					var $kvizForm = $('.kviz-form');

					this.init = function() {
						this.regList();
						// console.log('init');
					}

					this.regList = function() {
						$('.kvis-item__ques').click(this.quesClick);
						$('.kviz-prev').click(this.prevClick);
						$('.kviz-next').click(this.nextClick);
						$kvizForm.submit(this.kvizSubmit);
					}

					this.quesClick = function(e) {
						var $th = $(this);
						__self.counterPlus();
						__self.kvizRender();
						__self.progressRender();
						__self.formRender($th.text(), $th.data('name'));
						__self.partsRender();
					}
					
					this.prevClick = function(e) {
						__self.counterMinus();
						__self.kvizRender();
						__self.progressRender();
						__self.partsRender();
					}
					
					this.nextClick = function(e) {
							__self.counterPlus();
							__self.kvizRender();
							__self.progressRender();
							__self.partsRender();
						}

					this.counterPlus = function() {
						console.log("counterPlus");
						count++;
						if(count > 4) count = 4;
					}

					this.counterMinus = function() {
						count--;
						if(count < 1) count = 1;
						
					}

					this.kvizRender = function(currentBlock) {
						console.log("count " + count);
						$('.kvis-item').eq(count - 1).removeClass('hidden').siblings('.kvis-item').addClass('hidden');
					}

					this.progressRender = function() {
						if(count < 5){
							var $progressInner = $('.kviz-progress__inner');
							// var progrWidth = $progressInner.width();
							var newWidth = (count - 1) * 33.33333333333333 + 1;

							if(count == 1) newWidth = 1;

							$progressInner.css('width', newWidth + '%');
							$percentsOf.text(Math.floor(newWidth));
							
						}else{
							return;
						}

					}

					this.formRender = function(text, name) {
						// if($kvizForm.has('input[name='+ name +']')){
						// 	console.log("has!!!");
						// }
						var $newInput = $('<input>',{
							type: 'hidden',
							name: name,
							value: text
						});

						$kvizForm.append($newInput);

					}

					this.partsRender = function() {
						// if(count == 0) count = 1;
						// count > 3 ? $partOf.text("3") : $partOf.text(count);
						$partOf.text(count);
					}

					this.kvizSubmit = function(e) {
						var th = $(this);
							console.log(th.serialize());
							$('.kvis-item__form').submit();
							console.log($('.kvis-item__form').serialize());
						$.ajax({
							type: "POST",
							url: "mail.php", //Change
							data: th.serialize()
						}).done(function() {
							alert("Thank you!");
							setTimeout(function() {
								// Done Functions
								th.trigger("reset");
							}, 1000);
						});
						return false;
						
					}
			}
			var kviz = new Kviz();

			kviz.init();
		// end of kviz

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
