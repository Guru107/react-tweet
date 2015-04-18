//Client side
/** @jsx React.DOM */
//Require modules
var React = require('react'),
	TweetsApp = require('./components/TweetsApp'),
	initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

//Render the TweetsApp component
React.render(
	<TweetsApp tweets={initialState}/>,
	document.getElementById('react-mount')
	);