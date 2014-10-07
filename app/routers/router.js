var Backbone, _, React, Hello, TodosView, TodoCollection, data, todos, dispatcher, Router;

Backbone = require('backbone');
React = require('react');
Hello = require('views/helloWorld');
TodosView = require('views/todos');
HeaderView = require('views/header');
EventsView = require('views/events');
TodoStore = require('stores/todoStore');

Router = Backbone.Router.extend({
  routes: {
    '': 'main',
    'todo': 'todo'
  },

  main: function () {
    React.renderComponent(Hello(), document.getElementById('main'));
  },

  todo: function () {
    React.renderComponent(
      React.DOM.div({},
        HeaderView(),
        TodosView({ todos: TodoStore.todos })
      ),
      document.getElementById('main')
    );

    React.renderComponent(EventsView(), document.getElementById('tracker'));
  }
});
module.exports = Router;