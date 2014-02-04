/**
 * Created by OuKay(ouen.kay.gmail.com) on 1/31/14.
 * Contains global variables
 */
var NONE = null;

var ELEMENT_BORDER_COLOR = '#959595';
var ELEMENT_BACKGROUND_COLOR = '#f9f9f9';
var BORDER_WIDTH = 1;

function getElementById(_id) {
	return document.getElementById(_id);
}

function getElementsByClassName(_className) {
	return document.getElementsByClassName(_className);
}

function getCssStyle(_element, _property) {
	return getComputedStyle(_element, null).getPropertyValue(_property);
}

