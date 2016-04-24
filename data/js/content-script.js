self.port.on("click", function(comments) {
    /*
    $("div[data-comment-id]").eq(0).removeAttr("data-comment-id");
    $("div[data-comment-id]").eq(0).removeAttr("data-comment-id");
    $(window).scrollTop($('div[data-comment-id]').offset().top);
    */
    
    var $el = $("div[class~='_hint']").eq(0);
    $("div[class~='_hint']").eq(0).attr("class", $el.attr("class").replace("_hint", ""));
    
    $(window).scrollTop( $("div[class~='_hint']").eq(0).offset().top);
});