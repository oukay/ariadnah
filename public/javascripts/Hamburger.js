/**
 * Created by OuKay(ouen.kay.gmail.com) on 1/31/14.
 * Creates and Hamburger icon
 * @param _canvas
 * @constructor
 */
var Hamburger = function(_canvas) {
	var canvas = _canvas;
	var expectedTagName = 'canvas';

	// Check if it is really canvas passed
	if (!canvas || canvas.tagName.toLowerCase() != expectedTagName) {
		canvas = document.createElement(expectedTagName);
		canvas.width = 100;
		canvas.height = canvas.width;
	}

	// Color
	var color = '#959595';
	// Number of chunks
	var chunks = 3;
	// Chunk width and height
	var chunkWidth = canvas.width / 2;
	var chunkHeight = canvas.width / 10;
	// Space between chunks
	var space = chunkHeight / 2;
	// Chunk left and top
	var chunkLeft = (canvas.width - chunkWidth) / 2;
	var chunkTop = (canvas.height - ((chunks * chunkHeight) + (space * 2))) / 2;

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

	this.getElement = function() {
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

	return this.self;
};

/**
 * Add css class to inner element
 * @param _class
 * @returns {Hamburger|*}
 */
Hamburger.prototype.addClass = function(_class) {
	this.self.getElement().className += _class;

	return this.self;
};

/**
 * Attach hamburger to element
 * @param _element
 * @returns {Hamburger|*}
 */
Hamburger.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getElement());

	return this.self;
};

/**
 * Attach element to hamburger
 * @param _element
 * @returns {Hamburger|*}
 */
Hamburger.prototype.attach = function(_element) {
	this.self.getElement().appendChild(_element);

	return this.self;
};

/**
 * Add event listener to hamburger
 * @param _event
 * @param _callback
 * @returns {Hamburger|*}
 */
Hamburger.prototype.addEventListener = function(_event, _callback) {
	this.self.getElement().addEventListener(_event, _callback);

	return this.self;
};
