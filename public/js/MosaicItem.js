/**
 * Created by OuKay(ouen.kay.gmail.com)
 * Creates MosaicItem
 */
var MosaicItem = function(_div, _loader) {
	// Index of current mosaic element in chain of mosaic elements
	var index = 0;
	var div = _div;
	var expectedTagName = 'div';

	// Check if it is really canvas passed
	if (!div || div.tagName.toLowerCase() != expectedTagName) {
		div = document.createElement(expectedTagName);
	}

	// Loader element fot the time being server is working on request
	var loader = _loader;
	// Check if it is really canvas passed
	if (!loader || !loader instanceof Loader) {
		// FIXME: Need to find out how to pass size here
		loader = new Loader(NONE, 250, 250).attachTo(div);
	}

	// Interval for loader
	var interval = NONE;

	this.setIndex = function(_index) {
		index = _index;

		return this;
	};

	this.setText = function(_text) {
		div.textContent = _text;

		return this;
	}

	this.getText = function() {
		return div.textContent
	}

	this.getIndex = function() {
		return index;
	};

	this.setInterval = function(_interval) {
		interval = _interval;

		return this;
	};

	this.getInterval = function() {
		return interval;
	};

	this.getNext = function(_callback) {
		_callback(this.self.getIndex() + 1);

		return this;
	};

	this.getLoader = function() {
		return loader;
	};

	this.getElement = function() {
		return div;
	};

	this.self = this;
};

///**
// * Start loader
// */
//Mosaic.prototype.startLoader = function() {
//	var that = this.self;
//
//	this.self.setInterval(setInterval(function() {
//		that.getLoader().draw();
//	}, 50));
//
//	return that;
//};
//
///**
// * Stop loader
// */
//Mosaic.prototype.stopLoader = function() {
//	clearInterval(this.self.getInterval());
//	this.self.getLoader().undraw();
//	this.self.getElement().removeChild(this.self.getLoader().getElement());
//
//	return this.self;
//};

/**
 * Add css class to inner element
 * @param _class
 * @returns {MosaicItem|*}
 */
MosaicItem.prototype.addClass = function(_class) {
	this.self.getElement().className += _class;

	return this.self;
};

/**
 * Attach mosaic element to element
 * @param _element
 * @returns {MosaicItem|*}
 */
MosaicItem.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getElement());

	return this.self;
};

/**
 * Add event listener to mosaic element
 * @param _event
 * @param _callback
 * @returns {MosaicItem|*}
 */
MosaicItem.prototype.addEventListener = function(_event, _callback) {
	this.self.getElement().addEventListener(_event, _callback);

	return this.self;
};
