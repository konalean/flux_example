
var React = require('react');

var IconSection = React.createClass({
		render: function() {
			return <div className="demo_icon"><img src={this.props.imageSrc} /></div>
		}
});

module.exports = IconSection;