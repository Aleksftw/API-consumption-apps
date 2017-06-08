var target = $('button');

$(document).ready(function() {
	target.on('click', function() {
		console.log('Works!');
		alert('Handler works');
	});

});
