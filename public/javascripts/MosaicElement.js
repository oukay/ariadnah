/**
 * Created by OuKay(ouen.kay.gmail.com)
 * Creates Mosaic Element
 */
var MosaicElement = function(_canvas) {
	var canvas = _canvas;
	var size = 250;
	var expectedTagName = 'canvas';

	// Check if it is really canvas passed
	if (!canvas || canvas.tagName.toLowerCase() != expectedTagName) {
		canvas = document.createElement(expectedTagName);
	}
	canvas.width = size;
	canvas.height = size;

	// Color
	var color = '#f9f9f9';

	// Drawing context
	var context = canvas.getContext('2d');
	context.lineWidth = 0;
	context.fillStyle = color;

	this.getContext = function() {
		return context;
	};

	this.getHeight = function() {
		return canvas.height;
	};

	this.getWidth = function() {
		return canvas.width;
	};

	this.getCanvas = function() {
		return canvas;
	};

	this.self = this;
};

/**
 * Draw
 */
MosaicElement.prototype.draw = function() {
	var context = this.self.getContext();

	// Clear canvas
	context.clearRect(0, 0, this.self.getWidth(), this.self.getHeight());

	// Draw
	// TODO: Content need to be drawn
};

/**
 * Add css class to inner element
 * @param _class
 * @returns {MosaicElement|*}
 */
MosaicElement.prototype.addClass = function(_class) {
	this.self.getCanvas().className += _class;

	return this.self;
};

/**
 * Attach mosaic element to element
 * @param _element
 * @returns {MosaicElement|*}
 */
MosaicElement.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getCanvas());

	return this.self;
};

/**
 * Attach element to mosaic element
 * @param _element
 * @returns {MosaicElement|*}
 */
MosaicElement.prototype.attach = function(_element) {
	this.self.getCanvas().appendChild(_element);

	return this.self;
};

/**
 * Add event listener to mosaic element
 * @param _event
 * @param _callback
 * @returns {MosaicElement|*}
 */
MosaicElement.prototype.addEventListener = function(_event, _callback) {
	this.self.getCanvas().addEventListener(_event, _callback);

	return this.self;
};