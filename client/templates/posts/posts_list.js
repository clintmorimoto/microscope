/**
 * Created by Clint on 11/17/2015.
 */

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