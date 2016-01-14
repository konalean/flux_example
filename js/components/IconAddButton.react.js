var React = require('react');
var IconProcessAction = require("../action/IconProcessAction");

var IconAddButton = React.createClass({
	handleAddIcon: function(imgSrc, event){
		IconProcessAction.AddIcon(imgSrc);
	},
	handleRemoveIcon: function(){
		IconProcessAction.RemoveIcon();
	},
	handleClick: function(event) {
		alert(1);
	},

	render: function() {
		var boundItemClick = this.handleAddIcon.bind(this, 'imgs/ic_mail.png');
		return <button onClick={boundItemClick}>Add Icon</button>;
	}
});
module.exports = IconAddButton;