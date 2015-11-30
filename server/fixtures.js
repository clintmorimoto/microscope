/**
 * Created by Clint on 11/30/2015.
 *
 *  code that will load up three posts
 *  whenever the server starts, as long as the  Posts  collection is empty:
 */

if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}

//We’ve placed this file in the  server/  directory, so it will never get loaded on any user’s browser.
//    The code will run immediately when the server starts, and make  insert  calls on the database to
//add three simple posts in our  Posts  collection.