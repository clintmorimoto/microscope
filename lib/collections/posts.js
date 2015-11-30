/**
 * Created by Clint on 11/27/2015.
 *
 * Used to define a collection for this Microscope web app.
 * In Meteor, the  var  keyword limits the scope of an object to the current file. Here, we
 want to make the  Posts  collection available to our whole app, which is why we’re not
 using the  var  keyword.
 *
 *
 */

Posts = new Mongo.Collection('posts');

/*
 ****Mongo on Meteor.com
 Note that when hosting your app on *.meteor.com, you can also access your deployed
 app’s Mongo shell with  meteor mongo myApp .
 And while we’re at it, you can also get your app’s logs by typing  meteor logs myApp .

 ****Web apps have three basic ways of storing data at their disposal, each filling a different role:

 --The browser’s memory: things like JavaScript variables are stored in the browser’s
 memory, which means they’re not permanent: they’re local to the current browser tab, and
 will disappear as soon as you close it.

 --The browser’s storage: browsers can also store data more permanently using cookies or
 Local Storage. Although this data will persist from session to session, it’s local to the current
 user (but available across tabs) and can’t be easily shared with other users.

 --The server-side database: the best place for permanent data that you also want to make
 available to more than one user is in a good old database (MongoDB being the default
 solution for Meteor apps).

 ...Meteor makes use of all three, and will sometimes synchronize data from one place to another (as
 we’ll soon see). That being said, the database remains the “canonical“ data source that contains
 the master copy of your data.

 Code inside folders that are not  client/  or  server/  will run in both contexts. So the  Posts
 collection is available to both client and server. However, what the collection does in each
 environment can be pretty different.

 On the server, the collection has the job of talking to the MongoDB database, and reading and
 writing any changes. In this sense, it can be compared to a standard database library.

 On the client however, the collection is a copy of a subset of the real, canonical collection. The
 client-side collection is constantly and (mostly) transparently kept up to date with that subset in
 real-time.

 ****Looking at the contents of our Collections on the browser console is one thing, but what we’d
 really like to do is display the data, and the changes to that data, on the screen. In doing so we’ll
 turn our app from a simple web page displaying static data, to a real-time web application with
 dynamic, changing data.

 ****meteor reset
 The reset command completely clears out the Mongo database. It’s a useful command in
 development, where there’s a strong possibility of our database falling into an inconsistent state.


*/