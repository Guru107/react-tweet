/** @jsx React.DOM */
//Require modules
var  React = require('react'),
    Tweets = require('../components/Tweets');

//Main component
var TweetsApp = React.createClass({
	getInitialState:function(props){
		props=props||this.props;
		
		return {
			tweets:props.tweets
		};
	},
	render:function(){
		return (
			<Tweets tweets={this.state.tweets}/>
		);
	}
});
module.exports = TweetsApp;