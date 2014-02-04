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
	context.fillStyle = LINKED_IN_ELEMENT_BACKGROUND_COLOR;
	context.lineWidth = BORDER_WIDTH * 2;

	var that = this.self;
	function drawIcon(_hover) {
		// Clear canvas
		context.clearRect(0, 0, that.getWidth(), that.getHeight());

		// Some numbers below are not understandable at all, but just believe, those are correct
		// Draw 'i' base element
		var width = 0.15 * that.getWidth();
		var height = 0.47 * that.getHeight();
		var left = 0.15 * that.getWidth();
		var top = 0.37 * that.getHeight();
		context.beginPath();
		context.rect(left, top, width, height);
		if (_hover) {
			context.fill();
		}
		context.stroke();
		// Draw 'i' dot element
		var radius = 0.085 * that.getWidth();
		left = width / 2 + 0.15 * that.getWidth();
		top = 0.22 * that.getHeight();
		context.beginPath();
		context.arc(left, top, radius, 0, 2 * Math.PI, false);
		if (_hover) {
			context.fill();
		}
		context.stroke();

		// Draw 'n' base element
		left = 0.38 * that.getWidth();
		top = 0.37 * that.getHeight();
		context.beginPath();
		context.rect(left, top, width, height);
		if (_hover) {
			context.fill();
		}
		context.stroke();
		// Draw 'n' curve element
		context.beginPath();
		context.moveTo(left + width, 0.435 * that.getHeight());
		var cp1x = 0.58 * that.getWidth();
		var cp1y = 0.32 * that.getHeight();
		var cp2x = 0.835 * that.getWidth();
		var cp2y = 0.3 * that.getHeight();
		context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, 0.84 * that.getWidth(), 0.585 * that.getHeight());
		context.lineTo(0.84 * that.getWidth(), 0.845 * that.getHeight());
		context.lineTo(0.84 * that.getWidth() - 0.15 * that.getWidth(), 0.845 * that.getHeight());
		context.lineTo(0.84 * that.getWidth() - 0.15 * that.getWidth(), 0.589 * that.getHeight());
		cp1x = 0.69 * that.getWidth();
		cp1y = 0.46 * that.getHeight();
		cp2x = 0.53 * that.getWidth();
		cp2y = 0.46  * that.getHeight();
		context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, left + width, 0.60 * that.getHeight());
		if (_hover) {
			context.fill();
		}
		context.closePath();
		context.stroke();
	}

	this.addEventListener('mouseenter', function() {
		drawIcon(true);
	});

	this.addEventListener('mouseleave', function() {
		drawIcon(false);
	});

	drawIcon(false);

//	context.beginPath();
//	context.arc(cp1x, cp1y, 2, 0, 2 * Math.PI, false);
//	context.stroke();
//	context.beginPath();
//	context.arc(cp2x, cp2y, 2, 0, 2 * Math.PI, false);
//	context.stroke();

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
