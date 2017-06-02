var main = $('#main_box');
var button = $('#request_new');
var result = $('#result_box');
var twitter = $('#tweety');

function getQuote() {
	$.ajax({
		type: "GET",
		url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
		success: function(response) {
			$.each(response, function(i, quote) {
				result.empty();
				result.append(quote.content + "<p><em>-" + quote.title + "</em></p>");
				console.log(response);

				twitter.on('click', function() {
					var quoteTxt = quote.content;
					window.location.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURI($(quoteTxt).text() + "-" + quote.title);
				});
			})
		},
		cache: false,

	})

}
$(document).ready(function() {
	getQuote();
	button.on('click', function(e) {
		e.preventDefault();
		getQuote();
	});
});
