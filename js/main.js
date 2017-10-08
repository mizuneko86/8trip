$(document).ready(function() {
	var dateToday = new Date();
	// Datepicker
	if (typeof $.datepicker !== undefined) {
		var dates = $('.et-datepicker').datepicker({
			defaultDate: '+1w',
			dateFormat: 'dd/mm/yy',
			minDate: dateToday,
			onSelect: function(selectedDate) {
				var option = $(this).data('date') === 'day-out' ? 'minDate' : 'maxDate',
						instance = $(this).data('datepicker'),
						date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
				dates.not(this).datepicker('option', option, date);
			}
		});
	}

	// Slick
	if (typeof $.slick !== undefined) {
		$('.et-filter-slider .slick-carousel').slick({
			variableWidth: true,
			infinite: false,
			slidesToShow: 1,
			speed: 300,
			arrows: true,
			focusOnSelect: true,
			draggable: false,
			easing: 'ease-in-out',
			prevArrow: '<img src="images/ic_arrow_prev.svg" height="20" class="et-arrow et-arrow-prev"/>',
			nextArrow: '<img src="images/ic_arrow_next.svg" height="20" class="et-arrow et-arrow-next"/>'
		});
	}

	// Citypicker
	$('.et-city-picker').click(function(e) {
		$('#et-citypicker-dialog').dialog({
			position: {
				my: 'left top',
				at: 'left bottom',
				of: this
			},
			minWidth: 600,
			draggable: false,
			closeOnEscape: true,
			hide: { effect: "fade", duration: 300 },
			show: { effect: "fade", duration: 300 }
		});
	});

	// Toggle something by event click
	$('.btn-toggle').click(function(e) {
		e.preventDefault();
		var target = $(this).data('target');
		$('[data-ref="' + target + '"]').slideToggle();
	});

	// Toggle choose way
	$('.et-form-result .et-result-item:not(.booked)').click(function() {
		var parent = $(this).closest('.et-form-result');
		var self = this;
		if (!$(self).hasClass('active')) {
			$(parent).find('.et-result-item').removeClass('active');
			setTimeout(function() {
				$(self).addClass('active');
			}, 10);
		}
	});
});

$(document).ready(function() {
	// Format money
	if (typeof accounting !== undefined) {
		var numberElms = $('.et-format-money');
		$(numberElms).each(function(index, numberElm) {
			var money = accounting.formatMoney($(numberElm).text(), {
				symbol: '₫',
				format: '%v %s',
				precision: 0,
				decimal: ',',
				thousand: '.'
			});
			if (money) {
				$(numberElm).text(money);
			}
		});
	}
});