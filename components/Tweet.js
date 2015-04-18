/** @jsx React.DOM */
//Require modules
var React = require('react');

var Tweet = React.createClass({
  render: function(){
    var tweet = this.props.tweet;
    //Create a list item for a tweet
    return (
      <li className="list-group-item">
        <blockquote>
         <span>{tweet.text}</span>
        </blockquote>
      </li>
    )
  }
});

module.exports = Tweet;