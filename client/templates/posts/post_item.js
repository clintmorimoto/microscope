/**
 * Created by Clint on 11/17/2015.
 *
 * CONTAINS:  postItem's template logic.
 */

//The  domain  helper takes a URL and returns its domain via a bit of JavaScript magic. But where
//does it take that url from in the first place?

//Although this is not specific to Meteor, here’s a quick explanation of the above bit of
//“JavaScript magic”. First, we’re creating an empty anchor ( a ) HTML element and storing
//it in memory.
//    We then set its  href  attribute to be equal to the current post’s URL (as we’ve just seen, in
//a helper  this  is the object currently being acted upon).
//Finally, we take advantage of that  a  element’s special  hostname  property to get back
//the link’s domain name without the rest of the URL.

Template.postItem.helpers({
  // First helper of postItem template is "domain", which is an anonymous function (typical for helpers).
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

/*
 The  "domain"  helper takes a URL and returns its domain via a bit of JavaScript magic. But where
 does it take that url from in the first place?

 To answer that question we need to go back to our  posts_list.html  template. The  {{#each}}
 block helper not only iterates over our array, it also sets the value of  this  inside the block tothe iterated object.

 This means that between both  {{#each}}  tags, each post is assigned to  this  successively, and
 that extends all the way inside the included template’s manager ( post_item.js ).

 We now understand why  this.url  returns the current post’s URL. And moreover, if we use
 {{title}}  and  {{url}}  inside our  post_item.html  template, Meteor knows that we mean
 this.title  and  this.url  and returns the correct values.
 */