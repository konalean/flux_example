var TestDispatcher = require("../dispatcher/TestDispatcher");

var IconProcessAction = {
	AddIcon: function(imgSrc){
		TestDispatcher.dispatch({
			actionType: "AddIcon",
			imageSrc: imgSrc
		});
	},

	RemoveIcon: function(){
		TestDispatcher.dispatch({
			actionType: "RemoveIcon"
		});
	}
};

module.exports = IconProcessAction;