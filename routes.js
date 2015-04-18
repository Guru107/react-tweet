//Require modules

var JSX = require('node-jsx').install(),
    React = require('react'),
   TweetsApp = require('./components/TweetsApp'),
   TweetsAppFactory = React.createFactory(TweetsApp);

var Twitter = require('twitter'),
    config = require('./config');//Contains twitter keys

var oauth_access = {};
oauth_access.consumer_key = config.consumer_key;
oauth_access.consumer_secret = config.consumer_secret;
oauth_access.access_token_key = config.access_token_key;
oauth_access.access_token_secret = config.access_token_secret;

//Initialize the twitter client by sending oauth data.
var client = new Twitter(oauth_access);
//Parameter for sending request to twitter api
var params = {
    screen_name: 'TheGuru_107'
};
//Store the tweets
var twts = [];

//Export the methods
module.exports = {
    //Index route
    index: function(req, resp) {
        console.log("index route");
        var state = JSON.stringify(twts);
        var markup = React.renderToString(
            TweetsAppFactory({
                tweets: twts
            })
        );
        resp.render('sample', {
            markup: markup,
            state: state
        });

    },
    //Gets the user tweets
    getTweets: function() {
        client.get('statuses/user_timeline', params, function tweetsCallback(error, tweets, response) {
            if (!error) {
                twts = tweets;
            }
        });
    }
}
