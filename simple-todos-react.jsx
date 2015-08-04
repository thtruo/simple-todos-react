// Define collection to store our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });
}