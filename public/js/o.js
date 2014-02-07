/**
 * Slider engine
 * @param _e
 * @constructor
 */
//var Slider = function(_e) {
//	var e = _e;
//
//	this.left = function(_length, _step) {
//		var inc = _length / _step;
//
//		for (var i = 0; i < _step; i++) {
//			e$(e).css('left', parseInt(e$(e).css('left')) + inc + 'px');
//			e$(e).css('right', parseInt(e$(e).css('right')) + inc + 'px');
//		}
//	};
//
//	this.right = function(_length, _step) {
//		var inc = _length / _step;
//
//		for (var i = 0; i < _step; i++) {
//			e$(e).css('left', parseInt(e$(e).css('left')) - inc + 'px');
//			e$(e).css('right', parseInt(e$(e).css('right')) - inc + 'px');
//		}
//	};
//
//};

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
	},

//	slide: function() {
//		return new Slider(this.e);
//	}
};

Init = e$.o.Init = function(_e) {
	this.e = _e;
};

Init.prototype = e$.o;
