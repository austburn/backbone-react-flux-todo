var React, EventStore, EventsView;

React = require('react');
EventStore = require('stores/eventStore');
_ = require('underscore');

EventsView = React.createClass({
  componentWillMount: function () {
    Dispatcher.registerView(this.update);
  },

  getInitialState: function () {
    return {
      stack: EventStore.stack
    }
  },

  update: function () {
    this.setState({
      stack: EventStore.stack
    });
  },

  render: function () {
    var stack = _.map(this.state.stack.last(this.state.stack.length).reverse(), function (event) {
      var alertClass;
      alertClass = event.get('fired') ? 'alert alert-danger' : 'alert alert-success';

      return React.DOM.div({className: alertClass}, event.toString());
    }, this);

    return React.DOM.div({}, stack);
  }
});
module.exports = EventsView;