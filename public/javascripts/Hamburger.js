/**
 * Created by OuKay(ouen.kay.gmail.com) on 1/31/14.
 * Creates and Hamburger icon
 * @param _canvas
 * @constructor
 */
var Hamburger = function(_canvas) {
	var canvas = _canvas;
	var size = 100;
	var expectedTagName = 'canvas';

	// Check if it is really canvas passed
	if (!canvas || canvas.tagName.toLowerCase() != expectedTagName) {
		canvas = document.createElement(expectedTagName);
	}
	canvas.width = size;
	canvas.height = size;

	// Color
	var color = '#aaaaaa';
	// Space between chunks
	var space = size / 20;
	// Number of chunks
	var chunks = 3;
	// Chunk width and height
	var chunkWidth = size / 2;
	var chunkHeight = size / 10;
	// Chunk left and top
	var chunkLeft = (canvas.width - chunkWidth) / 2;
	/**
	 * FIXME: There is a bug in calculation. However hamburger is displayed correctly
	 * @type {number}
	 */
	var chunkTop = chunks * chunkHeight;

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

	this.getChunksCount = function() {
		return chunks;
	};

	this.getChunkHeight = function() {
		return chunkHeight;
	};

	this.getChunkWidth = function() {
		return chunkWidth;
	};

	this.getChunkTop = function() {
		return chunkTop;
	};

	this.getChunkLeft = function() {
		return chunkLeft;
	};

	this.doShift = function() {
		chunkTop += chunkHeight + space;
	};

	this.getCanvas = function() {
		return canvas;
	};

	this.self = this;
};

/**
 * Draw
 */
Hamburger.prototype.draw = function() {
	var context = this.self.getContext();

	// Clear canvas
	context.clearRect(0, 0, this.self.getWidth(), this.self.getHeight());

	// Draw chunks
	for (var i = 0; i < this.self.getChunksCount(); i++) {
		context.beginPath();
		context.rect(this.self.getChunkLeft(), this.self.getChunkTop(),
			this.self.getChunkWidth(), this.self.getChunkHeight());
		context.fill();

		this.self.doShift();
	}
};

/**
 * Add css class to inner element
 * @param _class
 */
Hamburger.prototype.addClass = function(_class) {
	this.self.getCanvas().className += _class;

	return this.self;
};

/**
 * Attach hamburger to element
 * @param _element
 */
Hamburger.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getCanvas());

	return this.self;
};

/**
 * Attach element to hamburger
 * @param _element
 */
Hamburger.prototype.attach = function(_element) {
	this.self.getCanvas().appendChild(_element);

	return this.self;
};
