self.port.on("click", function(id, $comments) {
	if ($comments === null) {
		$comments = $("div[class~='_hint']");
		self.port.emit("got_comments", $comments);
	}

	if (id >= $comments.length) {
		id = 0;
		self.port.emit("id_change");
	}

	$("div[class~='_hint']").each(function(index) {
  		if (index == id) {
			var elOffset = $(this).offset().top;
	  		var elHeight = $(this).height();
	  		var windowHeight = $(window).height();
	  		var offset;

	  		if (elHeight < windowHeight) {
	    		offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
	  		}
	  		else {
	    		offset = elOffset;
	  		}

			$('html, body').animate({
				scrollTop: offset
			}, 300);
		}
	});
});
