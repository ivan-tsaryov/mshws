self.port.on("click", function(curr_id) {
	var $comments = $("div[class~='_hint']");

	if (curr_id == $comments.length) {
		curr_id = 0;
	}

	$comments.each(function(index) {
  		if (index == curr_id) {
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 300);

			self.port.emit("curr_id_change", ++curr_id);
			return false;
		}
	});
});
