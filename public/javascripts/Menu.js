/**
 * Created by OuKay(ouen.kay.gmail.com)
 * Creates Menu
 */
var Menu = function(_div) {
	// Menu container
	var div = _div;
	var expectedTagName = 'div';

	// Menu items
	var items = [];
	// Menu invoker
	// FIXME: add multiple invokers support
	var invoker = NONE;

	// Check if it is really canvas passed
	if (!div || div.tagName.toLowerCase() != expectedTagName) {
		div = document.createElement(expectedTagName);
	}

	// Store value of previous display in order to restore it later on demand
	var display = NONE;

	this.addItem = function(_item) {
		items.push(_item);
		_item.attachTo(this.getElement());

		return this;
	};

	this.getItem = function(_index) {
		return items[_index];
	};

	this.getItems = function() {
		return items;
	};

	this.setInvoker = function(_invoker) {
		invoker = _invoker;

		var that = this;

		invoker.addEventListener('click', function() {
			if (that.isDisplayed()) {
				that.display(false);
			} else {
				that.display(true);
			}
		});

		return this;
	};

	this.getInvoker = function() {
		return this.invoker;
	};

	/**
	 * Assumes that invoker already set
	 * @returns {Menu}
	 */
	this.setInvokerWidth = function() {
		var that = this;
		this.invoker.addEventListener('click', function() {
			if (that.isDisplayed()) {
				that.display(false);
			} else {
				that.display(true);
			}
		});

		return this;
	};

	this.getElement = function() {
		return div;
	};

	this.display = function(_display) {
		if (_display) {
			this.getElement().style.display = display;
		} else {
			display = getCssStyle(this.getElement(), 'display');
			this.getElement().style.display = 'none';
		}

		return this;
	};

	this.isDisplayed = function() {
		return 'none' != getCssStyle(this.getElement(), 'display');
	};

	this.self = this;
};

/**
 * Add css class to inner element
 * @param _class
 * @returns {Menu|*}
 */
Menu.prototype.addClass = function(_class) {
	this.self.getElement().className += _class;

	return this.self;
};

/**
 * Attach mosaic element to element
 * @param _element
 * @returns {Menu|*}
 */
Menu.prototype.attachTo = function(_element) {
	_element.appendChild(this.self.getElement());

	return this.self;
};

/**
 * Add event listener to mosaic element
 * @param _event
 * @param _callback
 * @returns {Menu|*}
 */
Menu.prototype.addEventListener = function(_event, _callback) {
	this.self.getElement().addEventListener(_event, _callback);

	return this.self;
};
