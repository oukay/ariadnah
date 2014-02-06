/**
 * Created by OuKay(ouen.kay.gmail.com)
 */

/**
 * Elements engine
 * @param _input
 * @returns {e.Init}
 */
var e$ = function(_input) {
	var instance = null;

	if (_input instanceof HTMLElement) {
		instance = new e$.o.Init(_input);
	} else {
		try {
			instance = new e$.o.Init(document.querySelector(_input));
		} catch (error) {
			console.error(error);
		}
	}

	return instance;
};

e$.o = e$.prototype = {
	e: null,

	element: function() {
		return this.e;
	},

	find: function(_selector) {
		return new e$.o.Init(this.e.querySelector(_selector));
	},

	css: function(_property, _value) {
		if (!_value) {
			return getComputedStyle(this.e, null).getPropertyValue(_property);
		} else {
			this.e.style[_property] = _value;
		}

		return _value;
	},

	hasClass: function(_class) {
		return this.e.className.indexOf(_class) != -1;
	},

	replaceClass: function(_replacement, _replacer) {
		var classes = this.e.className.trim().split(' ');
		var value = '';

		for (var i = 0; i < classes.length; i++) {
			if (classes[i] == _replacement) {
				value += _replacer + ' ';
			} else {
				value += classes[i] + ' ';
			}
		}

		this.e.className = value;
	},

	on: function(_event, _callback) {
		this.e.addEventListener(_event, _callback);

		return this;
	}
};

Init = e$.o.Init = function(_e) {
	this.e = _e;
};

Init.prototype = e$.o;
