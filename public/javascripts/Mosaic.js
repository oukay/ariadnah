/**
 * Created by OuKay(ouen.kay.gmail.com)
 * Creates Mosaic Element
 */
var Mosaic = function(_canvas, _loader) {
	// Index of current mosaic element in chain of mosaic elements
	var index = 0;
	var canvas = _canvas;
	var expectedTagName = 'canvas';

	// Check if it is really canvas passed
	if (!canvas || canvas.tagName.toLowerCase() != expectedTagName) {
		canvas = document.createElement(expectedTagName);
		canvas.width = 250;
		canvas.height = canvas.width;
	}

	// Loader element fot the time being server is working on request
	var loader = _loader;
	// Check if it is really canvas passed
	if (!loader || !loader instanceof Loader) {
		loader = new Loader(canvas);
	}

	// Interval for loader
	var interval = NONE;

	// Drawing context
	var context = canvas.getContext('2d');

	this.setIndex = function(_index) {
		index = _index;

		return this;
	}

	this.getIndex = function() {
		return index;
	}

	this.setInterval = function(_interval) {
		interval = _interval;

		return this;
	}

	this.getInterval = function() {
		return interval;
	}

	this.getNext = function(_callback) {
		_callback(this.self.getIndex() + 1);

		return this;
	};

	this.getContext = function() {
		return context;
	};

	this.setHeight = function(_height) {
		canvas.height = _height;
		canvas.style.height = canvas.height;

		return this;
	}

	this.getHeight = function() {
		return canvas.height;
	};

	this.setWidth = function(_width) {
		canvas.width = _width;
		canvas.style.width = canvas.width;

		return this
	};

	this.getWidth = function() {
		return canvas.width;
	};

	this.setSize = function(_width, _height) {
		this.setHeight(_width);
		this.setWidth(_height);

		return this
	}

	this.getCanvas = function() {
		return canvas;
	};

	this.getLoader = function() {
		return loader;
	};

	this.self = this;
};

/**
 * Draw
 */
Mosaic.prototype.draw = function() {
	var context = this.self.getContext();

	// Clear canvas
	context.clearRect(0, 0, this.self.getWidth(), this.self.getHeight());

	// Draw
	// TODO: Content need to be drawn

	return this.self;
};

/**
 * Start loader
 */
Mosaic.prototype.startLoader = function() {
	var that = this.self;

	this.self.setInterval(setInterval(function() {
		that.getLoader().draw();
	}, 50));

	return that;
}

/**
 * Stop loader
 */
Mosaic.prototype.stopLoader = function() {
	clearInterval(this.self.getInterval());

	return this.self;
}

/**
 * Add css class to inner element
 * @param _class
 * @returns {MosaicElement|*}
 */
Mosaic.prototype.addClass = function(_class) {
	this.self.getCanvas().className += _class;

	return this.self;
};

/**
 * Attach mosaic element to element
 * @param _element
 * @returns {MosaicElement|*}
 */
Mosaic.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getCanvas());

	return this.self;
};

/**
 * Attach element to mosaic element
 * @param _element
 * @returns {MosaicElement|*}
 */
Mosaic.prototype.attach = function(_element) {
	this.self.getCanvas().appendChild(_element);

	return this.self;
};

/**
 * Add event listener to mosaic element
 * @param _event
 * @param _callback
 * @returns {MosaicElement|*}
 */
Mosaic.prototype.addEventListener = function(_event, _callback) {
	this.self.getCanvas().addEventListener(_event, _callback);

	return this.self;
};