var React = require('react');
var IconProcessAction = require("../action/IconProcessAction");

var IconAddButton = React.createClass({
	handleAddIcon: function(){
		IconProcessAction.AddIcon();
	},
	handleRemoveIcon: function(){
		IconProcessAction.RemoveIcon();
	},
	handleClick: function(event) {
		alert(1);
	},

	render: function() {
		return <button onClick={this.handleAddIcon}>Add Icon</button>;
	}
});
module.exports = IconAddButton;