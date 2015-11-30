/**
 * Created by Clint on 11/17/2015.
 * In the client, we need to subscribe to the publication:  Meteor.subscribe('posts');
 */

Meteor.subscribe('posts');

/*
Database everywhere:  Meteor will take a subset of your database and copy it to the client.  This has two big implications: first, instead of sending HTML code to the client, a Meteor app will
 send the actual, raw data and let the client deal with it (data on the wire). Second, you’ll be able
 to access and even modify that data instantaneously without having to wait for a round-trip to
 the server (latency compensation).

 Even though we want to make any non-flagged post available to clients, we can’t just send
 thousands of posts at once. We need a way for clients to specify which subset of that data they
 need at any particular moment, and that’s exactly where subscriptions come in.
 Any data you subscribe to will be mirrored on the client thanks to Minimongo, Meteor’s client-side
 implementation of MongoDB.
 */