/**
 * Created by OuKay(ouen.kay.gmail.com)
 * @constructor
 */
var Ajax = function(_element) {
	/**
	 * Target element for ajax request
	 * Mostly used in callbacks
	 */
	var element = _element;

	this.getElement = function() {
		return element;
	}

	this.self = this;
};

Ajax.prototype.get = function(_url, _data, _onWait, _onSuccess, _onError) {
	var that = this.self;

	var waitCallback = !_onWait ? function() {} : _onWait;
	var successCallback = !_onSuccess ? function() {} : _onSuccess;
	var errorCallback = !_onError ? function() {} : _onError;

	waitCallback(that.getElement());

	var httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', _url, true);
	httpRequest.responseType = 'json';
	httpRequest.send(_data);

	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				successCallback(that.getElement(), httpRequest.response);
			} else {
				errorCallback(that.getElement(), httpRequest.response);
			}
		}
	}
};
