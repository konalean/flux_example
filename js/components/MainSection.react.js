var React = require('react');
var IconSection = require('./IconSection.react');
var IconAddButton = require('./IconAddButton.react');
var IconStore = require('../store/IconStore');

var MainSection = React.createClass({
		getInitialState: function(){
			return{
				iconList: IconStore.getAllData()
			};
		},
		componentDidMount: function() {
	    	IconStore.addChangeListener(this.notifyDataChanged);
		},

	  	componentWillUnmount: function() {
	    	IconStore.removeChangeListener(this.notifyDataChanged);
	  	},

	  	notifyDataChanged: function() {
	  		this.setState({
				iconList: IconStore.getAllData()
			});
	  	},

		render: function() {
			
			var iconButtons = this.state.iconList.map(function(item, i) {
				return <IconSection imageSrc={item.imageSrc} key={i} />;
			}, this);


			return 	<div>
						<div>
							{iconButtons}
						</div>
						<div>
							<IconAddButton />
						</div>
					</div>;
		}
});
module.exports = MainSection;