(function($) {

$(window).load(function() {

	var wrapper = $("main#site-content");
	var header = $("#site-header");
	var headerheight = header.height();
	// var nav = $("#k-thenavbar");
	var navheight = header.height();

	$(window).on("scroll", function(e) {

		if ($(this).scrollTop() >= headerheight) {
			// sticky nav only if screen is larger than 800px
			if ($(this).width() > 700 ) {
				// nav.addClass("fixed-nav");
				header.addClass("fixed-nav");
				// nav.find(".blog-menu").find("a").css("padding", "16px 20px");
				header.find(".blog-menu").find("a").css("padding", "16px 20px");
				if ($(this).scrollTop() > headerheight + header.height()) {
					// header.css("background-color", "rgba(0,0,0,0.8)");
				}
				wrapper.css("padding-top", navheight + "px");
			}
		} else {
			header.removeClass("fixed-nav");
			// nav.css("background-color", "#1D1D1D");
			// nav.find(".blog-menu").find("a").css("padding", "27px 20px");
			wrapper.css("padding-top", "0px");
		}

	});

});

})( jQuery );
