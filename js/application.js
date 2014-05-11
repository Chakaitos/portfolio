$(document).ready(function() {
	$('#main-pic').on('mouseover', function() {
		$(this).fadeTo('slow', 1);
	});

	$('.projects').on('mouseover', function() {
		$(this).fadeTo('fast', 1);
	});

	$('.projects').on('mouseleave', function() {
		$(this).fadeTo('fast', 0.5);
	});

	$('.popup').on('click', function(e) {
		e.preventDefault();
		$(this).popover('toggle');
	});
});