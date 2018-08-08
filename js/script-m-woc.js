;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var isOpened = false;

	$doc.ready(function() {
		$doc.on('touchend', function(event) {
			if( !$(event.target) === '.global-search-form form' || !$(event.target).closest('.global-search-form form').length ) {
				$('.global-search-form').removeClass('is-visible');
				isOpened = false;
			}
		});

		$('.global-search-form').on('click', function(event) {
			event.stopPropagation();
		});

		$('.sb-menu-trigger').unbind('click');
		$('.sb-menu-trigger').on('click', function(event) {
			event.preventDefault();

			$(this).toggleClass('is-open');
			$('.main-navigation').toggleClass('is-open');
		});

		if( $('.gla-item-img').length ) {
			$('.gla-item-img').wrap('<div class="gla-item-img-wrapper"></div>');
		}

		$('.share-btn').on('click', function(event) {
			event.preventDefault();

			$(this).add( $(this).siblings('ul') ).toggleClass('active');
		});

		$('.mn-item-has-submenu > .mn-link').unbind('click');

		$('.mn-item-has-submenu > .mn-link').on('click', function(event) {
			event.preventDefault();			
		});

		$('.block-share .back').on('click', function(event) {
			event.preventDefault();

			history.back(1);
		});

		$win.on('load', function() {
			if( $('.front .la-slider').length ) {
				var $sliderMain =  $('#zone1 .la-slider').clone();
				$('#zone1 .la-slider').detach();
				$sliderMain.prependTo('.front #zone1 .list-articles');

				$('.front .la-slider .la-item-img').wrap('<div class="la-item-image"></div>');
				$('<div class="slider-paging"></div>').appendTo( $('.front .la-slider') );

				$('#zone1 .la-slider .slider-content').carouFredSel({
					circular: true,
					infinite: true,
					responsive: true,
					swipe: true,
					auto: {
						play: true,
						fx: 'slide',
						duration: 500,
						timeoutDuration: 5000
					},
					scroll: {					
						fx: 'slide',
						duration: 500
					},
					pagination: {
							container: '#zone1 .la-slider .slider-paging',
							anchorBuilder: true
					}
				});
			}

			if( $('.site-footer .quick-d').length ) {
				$('.site-footer .quick-d .ql-item').each(function(index) {
					index++;
					$(this).addClass('child-' + index );
				});
				
				$('.site-footer .quick-d').each(function() {
					$(this).find('.ql-list').carouFredSel({
						circular: true,
						infinite: true,
						responsive: true,
						swipe: true,
						items: {
							visible: 3
						},
						auto: {
							play: false,
							fx: 'slide',
							duration: 500,
							timeoutDuration: 5000
						}
					});
				});
			}

			if( $('.front #zone1 .quicklinks').length ) {

				$('.front #zone1 .quicklinks .ql-item').each(function(index) {
					index++;
					$(this).addClass('child-' + index );
				});

				$('.front #zone1 .quicklinks').each(function() {
					$(this).find('.ql-list').carouFredSel({
						circular: true,
						infinite: true,
						responsive: true,
						swipe: true,
						items: {
							visible: 3
						},
						auto: {
							play: false,
							fx: 'slide',
							duration: 500,
							timeoutDuration: 5000
						},
						scroll: {					
							fx: 'slide',
							duration: 500
						}
					});
				});		

				$('.front #zone1 .quicklinks .btn-primary').unbind('click');
				$('.gsf-trigger').unbind('click');

				$('.gsf-trigger').on('click', function(event) {
					if( !isOpened ) {
						$(this).closest('.global-search-form').addClass('is-visible');
						isOpened = true;						
					} else {
						$(this).closest('.global-search-form').find('form').trigger('submit');
						isOpened = false;						
					}
				});			
			}
		});
	});

})(jQuery, window, document);
