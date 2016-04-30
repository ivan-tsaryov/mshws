self.port.on("click", function(id) {
	var $comments = $("div[class~='_hint']");

	if (id >= $comments.length) {
		id = 0;
		self.port.emit("id_change");
	}

	$("div[class~='_hint']").each(function(index) {
		if (index == id)
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 300);
	});
});
