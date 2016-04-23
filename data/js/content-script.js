self.port.on("click", function(comments) {
    $("div[data-comment-id]").eq(0).removeAttr("data-comment-id");
    $("div[data-comment-id]").eq(0).removeAttr("data-comment-id");
    $(window).scrollTop($('div[data-comment-id]').offset().top);
});