/**
 * Created by Clint on 11/30/2015.
 *
 * Eventually we’ll need to make sure we’re only transferring the posts that the user actually needs to
 see (taking into account things like pagination). But for now, we’ll just setup  Posts  to be
 published in its entirety.
 To do so, we create a  publish()  function that returns a cursor referencing all posts:

 ...is the publish() function automatically called when your app is started?
 */

Meteor.publish('posts', function() {
  return Posts.find();
});