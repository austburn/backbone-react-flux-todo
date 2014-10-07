var React, Events, Backbone, _, dispatcher, Actions, TodoView;

React = require('react');
Events = require('events');
Backbone = require('backbone');
_ = require('underscore');
Actions = require('actions');
Dispatcher = require('events/dispatcher');


TodoView = React.createClass({
  getInitialState: function () {
    return {
      editing: false
    }
  },

  handleSubmit: function (e) {
    if (e.charCode === 13) {
      this.toggleEdit();
      this.props.todo.set('task', e.target.value);
      e.target.defaultValue = e.target.value;
    }
  },

  handleRemove: function (e) {
    Actions.remove(this.props.todo);
  },

  toggleEdit: function (e) {
    this.setState({
      editing: !this.state.editing
    })
  },

  render: function () {
    return React.DOM.div({className: 'well'},
      new React.DOM.span({hidden: this.state.editing}, this.props.todo.get('task')),
      new React.DOM.input({
        defaultValue: this.props.todo.get('task'),
        hidden: !this.state.editing,
        onKeyPress: this.handleSubmit
      }),
      new React.DOM.span({
        className: 'glyphicon glyphicon-remove',
        style: {'float': 'right', 'margin-left': '5px'},
        onClick: this.handleRemove
      }),
      new React.DOM.span({
        className: 'glyphicon glyphicon-pencil',
        style: {'float': 'right'},
        onClick: this.toggleEdit
      })
    );
  }
});
module.exports = TodoView;