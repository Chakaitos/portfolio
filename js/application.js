$(document).ready(function() {
	$('.title-banner').mouseenter(function() {
		$(this).fadeTo('fast', 1);
	});

	$('.title-banner').mouseleave(function() {
		$(this).fadeTo('fast', 0.5);
	});

	$('.resume-box').on('click', function() {
		$(this).find('.resume-content').slideToggle();
	});

	$('#main-pic').on('mouseover', function() {
		$(this).fadeTo('slow', 1);
	});
});