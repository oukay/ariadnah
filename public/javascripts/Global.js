/**
 * Created by OuKay(ouen.kay.gmail.com) on 1/31/14.
 * Contains global variables
 */
var NONE = null;

function getElementById(_id) {
	return document.getElementById(_id);
}

function getElementsByClassName(_className) {
	return document.getElementsByClassName(_className);
}

function getCssStyle(_element, _property) {
	return getComputedStyle(_element, null).getPropertyValue(_property);
}

