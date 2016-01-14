const CHANGE_EVENT = "change";

var TestDispatcher = require("../dispatcher/TestDispatcher");
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");
var _data = [];
_data.push({imageSrc:'imgs/ic_mail.png'});

function _addIcon(imageSrc) {
	_data.push({imageSrc:imageSrc});
}

function _removeicon() {
	_data.splice((_data.length - 1), 1);
}

var IconStore = assign({}, EventEmitter.prototype, {
	getAllData: function() {
		return _data;
	},

	addChangeListener: function(callback) {
	    this.on(CHANGE_EVENT, callback);
	},

  	removeChangeListener: function(callback) {
    	this.removeListener(CHANGE_EVENT, callback);
  	},

  	notifyChange: function() {
    	this.emit(CHANGE_EVENT);
  	},
});

TestDispatcher.register(function(action){
	switch(action.actionType){
		case "AddIcon":
			_addIcon(action.imageSrc);
			IconStore.notifyChange();
			break;
		case "RemoveIcon":
			break;
		default:
	}
});

module.exports = IconStore;