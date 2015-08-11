var paceHidden = false;

Pace.on('hide', function () {

	var bit = getParameterByName('b');

	if ((bit.length > 1)) {

		location.replace('http://microsit.es/' + bit);

	}

});