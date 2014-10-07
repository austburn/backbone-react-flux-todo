var React, Hello;

React = require('react');

Hello = React.createClass({
  render: function () {
    return React.DOM.div({}, 'Hello, World!');
  }
});
module.exports = Hello;