$('.popover_parent a').on('click', function() {
	$(this).parent().toggleClass('active');
});

$(document).on('click touchstart', function(event) {
	if (!$(event.target).closest('.popover_parent').length) {
		$('.popover_parent.active').removeClass('active');
	}
});
