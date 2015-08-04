React in Meteor Tutorial
========================

Going through the preview [React-Meteor tutorial](http://tutorial-viewer.meteor.com/tutorial/0/react).

See it in action at [another-todo-list.meteor.com](https://another-todo-list.meteor.com)

#Notable Things

I've gone through the awesome Discover Meteor tutorial and have a decent understanding of how Meteor 1.0 works. Going through the React tutorial, several things jumped out as different:

- React uses JSX (not a problem, since the React package in Meteor automatically compiles `.jsx` files)
- JSX files use the ES6 features
- Use mixins in order to use data from a Meteor collection in a React component
- In React, you handle DOM events by directly referencing a method on the component. Inside the event handler, you can reference elements from the component by giving them a `ref` property and using `React.findDOMNode`. Learn more about how the event system works in React [here](https://facebook.github.io/react/docs/events.html)
- 