/**
 * Created by OuKay(ouen.kay.gmail.com) on 2/2/14.
 * @param _canvas
 * @constructor
 */
var LogIn = function(_div, _text) {
	var div = _div;
	var expectedTagName = 'div';

	// Check if it is really canvas passed
	if (!div || div.tagName.toLowerCase() != expectedTagName) {
		div = document.createElement(expectedTagName);
	}

	div.textContent = _text;

	this.getElement = function() {
		return div;
	}

	this.self = this;
};

/**
 * Add css class to inner element
 * @param _class
 * @returns {LogIn|*}
 */
LogIn.prototype.addClass = function(_class) {
	this.self.getElement().className += _class;

	return this.self;
};

/**
 * Remove css class from inner element
 * @param _class
 * @returns {LogIn|*}
 */
LogIn.prototype.removeClass = function(_class) {
	var classes = this.self.getElement().className.split(' ');
	this.self.getElement().className = '';
	for(var i = 0; i < classes.length; i++) {
		if(classes[i] !== _class) {
			this.self.getElement().className += classes[i] + ' ';
		}
	}

	return this.self;
};

/**
 * Attach hamburger to element
 * @param _element
 * @returns {LogIn|*}
 */
LogIn.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getElement());

	return this.self;
};

/**
 * Add event listener to hamburger
 * @param _event
 * @param _callback
 * @returns {LogIn|*}
 */
LogIn.prototype.addEventListener = function(_event, _callback) {
	this.self.getElement().addEventListener(_event, _callback);

	return this.self;
};
