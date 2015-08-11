paceOptions = {
	elements : {
		selectors : ['.adpacks-wrap']
	}
};

var paceHidden = false;

Pace.on('hide', function () {

	$('#adpacks').css('display', 'none');

	var bit = getParameterByName('b');

	if ((bit.length > 1)) {

		location.replace('http://myshar.es/' + bit);

	}

});