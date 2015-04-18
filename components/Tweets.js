/** @jsx React.DOM */
//Require modules
var React = require('react');
var Tweet = require('../components/Tweet');//Require the tweet component

var Tweets = React.createClass({

  // Render our tweets
  render: function(){

    // Build list items of single tweet components using map
    var content = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet.id} tweet={tweet} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <ul className="list-group">{content}</ul>
    )

  }

});
module.exports = Tweets;