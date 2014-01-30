/**
 * Created by OuKay(ouen.kay.gmail.com) on 1/31/14.
 * Creates and draw Loading icon
 * @param canvas <canvas> object
 * @constructor
 */
var Loader = function(canvas) {
	// Allowed angles
	var minAngle = 0.0;
	var maxAngle = 2.0;

	// Color
	var color = '#999999';

	// Which angle to start
	var shift = minAngle;
	// Which angle to turn
	var shiftIncrement = 0.2;
	// How many chunks in the outer circle
	var chunks = 3;
	// Space between outer circle chunks
	var space = 0.1;
	// Length of chunks based on chunks length
	var length = maxAngle / chunks;

	// Canvas loader size
	var width = canvas.width;
	var height = canvas.height;

	// Center of the loader
	var x = width / 2
	var y = height / 2;

	// Longest side in [width, height]
	var side = width;
	if (height < width) {
		side = height;
	}

	// Radius of outer circle
	var outerRadius = (4 * side) / 10;
	// Radius of inner circle
	var innerRadius = (13 * side) / 50;

	// Drawing context
	var context = canvas.getContext('2d');
	context.lineWidth = side / 5;
	context.strokeStyle = color;
	context.fillStyle = color;

	this.getContext = function() {
		return context;
	}

	this.getX = function() {
		return x;
	}

	this.getY = function() {
		return y;
	}

	this.getMinAngle = function() {
		return minAngle;
	}

	this.getMaxAngle = function() {
		return maxAngle;
	}

	this.getHeight = function() {
		return height;
	}

	this.getWidth = function() {
		return width;
	}

	this.getInnerRadius = function() {
		return innerRadius;
	}

	this.getChunks = function() {
		return chunks;
	}

	this.getOuterRadius = function() {
		return outerRadius;
	}

	this.getArcStartAngle = function(m) {
		return m * length * Math.PI + space + shift
	}

	this.getArcEndAngle = function(m) {
		return m * length * Math.PI + shift;
	}

	this.doShift = function() {
		if (shift < maxAngle) {
			shift += shiftIncrement;
		} else {
			shift = shiftIncrement;
		}
	}

	this.self = this;
};

/**
 * Runs Loader
 */
Loader.prototype.run = function() {
	var context = this.self.getContext();

	// Clear canvas
	context.clearRect(0, 0, this.self.getWidth(), this.self.getHeight());

	// Draw inner circle
	context.beginPath();
	context.arc(this.self.getX(), this.self.getY(), this.self.getInnerRadius(),
		this.self.getMinAngle() * Math.PI, this.self.getMaxAngle() * Math.PI, false);
	context.fill();

	for (var i = 0; i < this.self.getChunks(); i++) {
		context.beginPath();
		context.arc(this.self.getX(), this.self.getY(), this.self.getOuterRadius(),
			this.self.getArcStartAngle(i), this.self.getArcEndAngle(i + 1), false);
		context.stroke();
	}

	this.self.doShift();
};