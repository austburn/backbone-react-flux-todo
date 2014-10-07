var React, TodosView, TodoView;

React = require('react');
TodoView = require('views/todo');
TodoStore = require('stores/todoStore');
Dispatcher = require('events/dispatcher');

TodosView = React.createClass({
  componentWillMount: function () {
    Dispatcher.registerView(this.update);
  },

  getInitialState: function () {
    return {
      todos: TodoStore.todos
    }
  },

  update: function () {
    this.setState({
      todos: TodoStore.todos
    });
  },

  render: function () {
    var todos = this.state.todos.map(function (todo) {
      return TodoView({ todo: todo });
    }, this);

    return React.DOM.div({}, todos);
  }
});
module.exports = TodosView;