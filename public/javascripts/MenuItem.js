/**
 * Created by OuKay(ouen.kay.gmail.com)
 * Creates MenuItem
 */
var MenuItem = function(_div, _text) {
	// Menu container
	var div = _div;
	var expectedTagName = 'div';

	// Check if it is really canvas passed
	if (!div || div.tagName.toLowerCase() != expectedTagName) {
		div = document.createElement(expectedTagName);
	}
	div.textContent = _text;

	this.getElement = function() {
		return div;
	};

	this.self = this;
};

/**
 * Add css class to inner element
 * @param _class
 * @returns {Menu|*}
 */
MenuItem.prototype.addClass = function(_class) {
	this.self.getElement().className += _class;

	return this.self;
};

/**
 * Attach mosaic element to element
 * @param _element
 * @returns {Menu|*}
 */
MenuItem.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getElement());

	return this.self;
};

/**
 * Add event listener to mosaic element
 * @param _event
 * @param _callback
 * @returns {Menu|*}
 */
MenuItem.prototype.addEventListener = function(_event, _callback) {
	this.self.getElement().addEventListener(_event, _callback);

	return this.self;
};
