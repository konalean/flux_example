var TestDispatcher = require("../dispatcher/TestDispatcher");

var IconProcessAction = {
	AddIcon: function(){
		TestDispatcher.dispatch({
			actionType: "AddIcon"
		});
	},

	RemoveIcon: function(){
		TestDispatcher.dispatch({
			actionType: "RemoveIcon"
		});
	}
};

module.exports = IconProcessAction;