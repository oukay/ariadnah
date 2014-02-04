/**
 * Created by OuKay(ouen.kay.gmail.com)
 * @param _canvas
 * @constructor
 */
var LinkedInIcon = function(_canvas) {
	var canvas = _canvas;
	var expectedTagName = 'canvas';

	// Check if it is really canvas passed
	if (!canvas || canvas.tagName.toLowerCase() != expectedTagName) {
		canvas = document.createElement(expectedTagName);
		canvas.width = 60;
		canvas.height = canvas.width;
	}

	// Drawing context
	var context = canvas.getContext('2d');

	this.getContext = function() {
		return context;
	};

	this.getHeight = function() {
		return canvas.height;
	};

	this.getWidth = function() {
		return canvas.width;
	};

	this.getElement = function() {
		return canvas;
	};

	this.self = this;
};

/**
 * Draw
 */
LinkedInIcon.prototype.draw = function() {
	var context = this.self.getContext();

	// Draw text prerequisites
	context.strokeStyle = ELEMENT_BORDER_COLOR;
	context.lineWidth = BORDER_WIDTH * 2;

	// Some numbers below are not understandable at all, but just believe, those are correct
	// Draw 'i' element
	var width = 0.15 * this.self.getWidth();
	var height = 0.47 * this.self.getHeight();
	var left = 0.15 * this.self.getWidth();
	var top = 0.37 * this.self.getHeight();
	context.beginPath();
	context.rect(left, top, width, height);
	context.stroke();

	// Draw 'i' dot element
	var radius = 0.085 * this.self.getWidth();
	left = width / 2 + 0.15 * this.self.getWidth();
	top = 0.22 * this.self.getHeight();
	context.beginPath();
	context.arc(left, top, radius, 0, 2 * Math.PI, false);
	context.stroke();

	// Draw 'n' element
	left = 0.38 * this.self.getWidth();
	top = 0.37 * this.self.getHeight();
	context.beginPath();
	context.rect(left, top, width, height);
	context.stroke();

	return this.self;
};

/**
 * Add css class to inner element
 * @param _class
 * @returns {LinkedInIcon|*}
 */
LinkedInIcon.prototype.addClass = function(_class) {
	this.self.getElement().className += _class;

	return this.self;
};

/**
 * Attach hamburger to element
 * @param _element
 * @returns {LinkedInIcon|*}
 */
LinkedInIcon.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getElement());

	return this.self;
};

/**
 * Add event listener to hamburger
 * @param _event
 * @param _callback
 * @returns {LinkedInIcon|*}
 */
LinkedInIcon.prototype.addEventListener = function(_event, _callback) {
	this.self.getElement().addEventListener(_event, _callback);

	return this.self;
};
