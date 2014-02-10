/**
 * Created by OuKay(ouen.kay.gmail.com)
 * Creates Mosaic
 */
var MosaicHolder = function(_holder) {
	var MAX_MOSAIC_SIZE = 200;

	var holder = _holder;
	var items = [];
	if (!holder) {
		holder = document.createElement('div');
	}

	// Cached holder width to avoid constant recalculation
	var holderWidth = NONE;
	// Count of items in row
	var itemsInRow = NONE;
	// Padding/Margin/Border/etc sizes
	var extraSize = NONE;
	// Size of the box
	var itemSize = NONE;

	this.addItem = function(_item) {
		e$(holder).append(_item);
		items.push(_item);

		return this.adjustItem(_item);
	};

	this.getItem = function(_index) {
		return items[_index];
	};

	this.getItems = function() {
		return items;
	};

	this.adjustItem = function(_item) {
		// Count it only for the first time as these values are not going to be changed
		if (!extraSize) {
			extraSize = parseInt(e$(_item).css('padding-right')) +
				parseInt(e$(_item).css('padding-left')) +
				parseInt(e$(_item).css('margin-right')) +
				parseInt(e$(_item).css('margin-left')) +
				parseInt(e$(_item).css('border-width')) * 2;
		}

		// Recalculate size only if holder width changed
		if (e$(holder).css('width') !== holderWidth) {
			holderWidth = e$(holder).css('width');
			itemsInRow = Math.floor(parseInt(holderWidth) / (extraSize + MAX_MOSAIC_SIZE));
			itemSize = Math.floor(parseInt(holderWidth) / itemsInRow - extraSize);

			this.adjustItems();
		}

		e$(_item).css('width', itemSize + 'px');
		e$(_item).css('height', itemSize + 'px');

		return this;
	};

	this.adjustItems = function() {
		for (var i = 0; i < items.length; i++) {
			this.adjustItem(items[i]);
		}
	};

};
