;(function ( $, window, document, undefined ) {
	'use strict';
	var pluginName = 'Timeline',
		defaults = {
			//defaultExpansion: 'expanded',
			//gutterWidth : '.timeline-gutter',
			capability: true,
			filter: false,
			filterOptions: {
				category: []
			},
			sort: false
		};

	function Timeline( element, options ) {
		var _ = this;
		_.element = element;

		_.options = $.extend( {}, defaults, options) ;

		_._defaults = defaults;
		_._name = pluginName;

		_.init();
	}
	function sortYear(val, state) {
		if (state) {
			return Date.parse(val) - 1;
		} else {
			return Date.parse('Dec 31, ' + val) + 1 ;
		}
	}

	function changeTimestamp(element, state) {
		element.find('.label-year').each(function(){
			var _ = $(this),
				date = _.find('.year').text(),
				timestamp = sortYear(date, state);
			_.find('.timestamp').text(timestamp);
		});
	}

	Timeline.prototype = {

		init: function() {
			var _ = this;

			_.buildLayout(_.element, _.options);
			_.buildCapability(_.element, _.options);
			_.buildTimestamp(_.element, _.options);
			_.isotope(_.element, _.options);
			_.buildPosition(_.element, _.options);
		},
		destroy: function() {

		},

		buildLayout: function() {
			var _ = this,
				$el = $(_.element);

			$el.addClass('timeline-container')
				.children().addClass('post item')
				.append('<div class="timestamp"></div>')
				.append('<div class="timeline-gutter"></div>')
				.wrapAll('<div class="timeline-list"/>')
				.end()
				.append('<div class="line"></div>');
		},
		buildCapability: function(i) {
			var _ = this, string,
				filterCategoryLen = _.options.filterOptions.category.length;

			if ( _.options.filter === true || _.options.sort === true ) {

				string = '<ul class="timeline-capability">';

				if (_.options.filter === true) {
					string += '<li class="button" data-filter="*">All</li>';

					for (i = 0; i < filterCategoryLen; i += 1) {
						string += '<li class="button ' + _.options.filterOptions.category[i] + '" data-filter=".' + _.options.filterOptions.category[i] + '">' + _.options.filterOptions.category[i] + '</li>';
					}
				}

				if (_.options.sort === true) {
					string += '<li class="button sort" data-sort-value="timestamp">old</li>';
				}

				string += '</ul>';

				$(_.element).append(string);
			}
		},
		buildTimestamp: function() {
			var _ = this,
				$el = $(_.element),
				remove = {},
				filterCategoryLen = _.options.filterOptions.category.length;

			$el.find('.date').each(function(i){
				var _ = $(this), str,
					date = _.text(),
					timestamp = Date.parse(date),
					yearTimestamp = sortYear(date, true),
					year = new Date(timestamp).getFullYear();

				_.siblings('.timestamp').text(timestamp);

					str = '<div class="label-year item">';
					str += '<div class="timestamp">' + yearTimestamp + '</div>';
					str += '<div class="year">' + year + '</div>';
					str += '</div>';

				$el.find('.timeline-list').append(str);
			});

			$el.find('.label-year').each(function() {
				var _ = $(this),
					str =  _.children('.year').text();
				if (remove[str]) {
					_.remove();
				} else {
					remove[str] = true;
				}
			});
		},

		isotope: function(i) {
			var _ = this,
				$el = $(_.element).find('.timeline-list'),
				$defaultOptions = {
					itemSelector: '.item',
					layoutMode: 'fitRows',
					percentPosition: true,
					getSortData: {
						timestamp: '.timestamp parseInt'
					},
					sortBy: 'timestamp'
				};

			function resetClass(el) {
				var data = el.data('isotope'),
					allElement = data.filteredItems,
					topElement = data.filteredItems[0].element;

				/* Year 'top' addClass */
				$(topElement).siblings().removeClass('top')
					.end().addClass('top');

				/* Add and Remove 'right' Class */
				for ( i=0; i<allElement.length; i++) {
					var target = allElement[i].element;
					if (target.style.left !== '0%') {
						$(target).addClass('right');
					} else {
						$(target).removeClass('right');
					}
				}
				//el.isotope('reloadItems').isotope($defaultOptions);
			}

			/* Default isotope */
			if ( _.options.filter === false && _.options.sort === false ) {
				$el.imagesLoaded(function () {
					$el.isotope($defaultOptions);
					resetClass($el);
				});
			}

			if ( _.options.filter === true && _.options.sort === false ) {
				$el.imagesLoaded(function(){
					// init Isotope
					var $init = $el.isotope($defaultOptions);
					// filter items on button click
					//alert("filter==true");
					$(_.element).find('.timeline-capability').on( 'click', '.button', function() {
						var filterValue = $(this).attr('data-filter');
						$init.isotope({ filter: filterValue });
					});
				});
			}

			if ( _.options.sort === true && _.options.filter === false ) {
				$el.imagesLoaded(function(){
					// init Isotope
					var $init = $el.isotope($defaultOptions);
					resetClass($init);
					$(_.element).find('.timeline-capability .button.sort').on( 'click', function() {
						var _ = $(this);
						if (_.text() === 'old') {
							changeTimestamp($el, false);
							$init.isotope('reloadItems').isotope({sortAscending: false});
							resetClass($init);
							_.text('new');
						} else {
							changeTimestamp($el, true);
							$init.isotope('reloadItems').isotope({sortAscending: true});
							resetClass($init);
							_.text('old');
						}
					});
					$el.on( 'arrangeComplete', function() {
						resetClass($init);
						//console.log(resetClass($init));
					});
				});
			}

			if ( _.options.filter === true && _.options.sort === true ) {
				alert("filter==true/sort==true");
				$el.imagesLoaded(function(){
					var $init = $el.isotope($defaultOptions);

					resetClass($el);
					$(_.element).find('.timeline-capability .button').on( 'click', function() {
						var filterValue = $(this).attr('data-filter');
						$init.isotope({ filter: filterValue });
					});

					$(_.element).find('.timeline-capability .button.sort').on( 'click', function() {
						var _ = $(this);
						if (_.text() === 'old') {
							changeTimestamp($el, false);
							$init.isotope('reloadItems').isotope({sortAscending: false});
							resetClass($init);
							_.text('new');
						} else {
							changeTimestamp($el, true);
							$init.isotope('reloadItems').isotope({sortAscending: true});
							resetClass($init);
							_.text('old');
						}
					});
					$el.on( 'arrangeComplete', function() {
						resetClass($init);
						//console.log(resetClass($init));
					});
				});
			}
		},
		buildPosition: function() {
		}
	};

	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName,
					new Timeline( this, options ));
			}
		});
	}

})( jQuery, window, document );