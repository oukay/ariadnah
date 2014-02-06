/**
 * Created by OuKay(ouen.kay.gmail.com)
 * @param _canvas
 * @constructor
 */
var Loader = function(_canvas, _width, _height) {
	var canvas = _canvas;
	var expectedTagName = 'canvas';

	// Check if it is really canvas passed
	if (!canvas || canvas.tagName.toLowerCase() != expectedTagName) {
		canvas = document.createElement(expectedTagName);
	}
	if (isNaN(_width) || isNaN(!_height)) {
		// Default dimensions
		canvas.width = 100;
		canvas.height = 100;
	} else {
		canvas.width = _width;
		canvas.height = _height;
	}

	// Allowed angles
	var minAngle = 0.0;
	var maxAngle = 2.0;

	// Color
	var color = ELEMENT_BORDER_COLOR;

	// Which angle to start
	var shift = minAngle;
	// Which angle to turn
	var shiftIncrement = 0.3;
	// How many chunks in the outer circle
	var chunks = 3;
	// Space between outer circle chunks
	var space = 0.1;
	// Length of chunks based on chunks length
	var length = maxAngle / chunks;

	// Radius of outer circle
	var outerRadius = (4 * canvas.width) / 10;
	// Radius of inner circle
	var innerRadius = (13 * canvas.width) / 50;

	// Drawing context
	var context = canvas.getContext('2d');
	context.lineWidth = canvas.width / 5;
	context.strokeStyle = color;
	context.fillStyle = color;

	this.getContext = function() {
		return context;
	};

	this.getMinAngle = function() {
		return minAngle;
	};

	this.getMaxAngle = function() {
		return maxAngle;
	};

	this.getHeight = function() {
		return canvas.height;
	};

	this.getWidth = function() {
		return canvas.width;
	};

	this.getInnerRadius = function() {
		return innerRadius;
	};

	this.getChunksCount = function() {
		return chunks;
	};

	this.getOuterRadius = function() {
		return outerRadius;
	};

	this.getArcStartAngle = function(_m) {
		return _m * length * Math.PI + space + shift
	};

	this.getArcEndAngle = function(_m) {
		return _m * length * Math.PI + shift;
	};

	this.doShift = function() {
		if (shift < maxAngle) {
			shift += shiftIncrement;
		} else {
			shift = shiftIncrement;
		}
	};

	this.getElement = function() {
		return canvas;
	};

	this.self = this;
};

/**
 * Draw
 */
Loader.prototype.draw = function() {
	var context = this.self.getContext();

	// Clear canvas
	context.clearRect(0, 0, this.self.getWidth(), this.self.getHeight());

	// Draw inner circle
	context.beginPath();
	context.arc(this.self.getWidth() / 2, this.self.getHeight() / 2, this.self.getInnerRadius(),
		this.self.getMinAngle() * Math.PI, this.self.getMaxAngle() * Math.PI, false);
	context.fill();

	for (var i = 0; i < this.self.getChunksCount(); i++) {
		context.beginPath();
		context.arc(this.self.getWidth() / 2, this.self.getHeight() / 2, this.self.getOuterRadius(),
			this.self.getArcStartAngle(i), this.self.getArcEndAngle(i + 1), false);
		context.stroke();
	}

	this.self.doShift();

	return this.self;
};

/**
 * Undraw
 */
Loader.prototype.undraw = function() {
	var context = this.self.getContext();

	// Clear canvas
	context.clearRect(0, 0, this.self.getWidth(), this.self.getHeight());

	return this.self;
};

/**
 * Add css class to inner element
 * @param _class
 * @returns {Loader|*}
 */
Loader.prototype.addClass = function(_class) {
	this.self.getElement().className += _class;

	return this.self;
};

/**
 * Attach loader to element
 * @param _element
 * @returns {Loader|*}
 */
Loader.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getElement());

	return this.self;
};

/**
 * Add event listener to loader
 * @param _event
 * @param _callback
 * @returns {Loader|*}
 */
Loader.prototype.addEventListener = function(_event, _callback) {
	this.self.getElement().addEventListener(_event, _callback);

	return this.self;
};
