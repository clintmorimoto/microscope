/**
 * Created by Clint on 11/17/2015.
 *
 * CONTAINS:  postsList's template logic. (The template's NAME is "postsList".)
 */

Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});

/*  p. 55:  feel free to delete the  postsData  code at this point.
var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];

Template.postsList.helpers({
  // BELOW is our first helper; the helper names "posts".  It is called in out "postsList" TEMPLATE.
  posts: postsData
});

*/

/*
 In Meteor,  find()  returns a cursor, which is a reactive data source.

 */