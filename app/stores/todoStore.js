var TodosCollection, data, todos, Events, Dispatcher, TodoStore;

TodosCollection = require('collections/todos');
data = require('../../todos.json');
todos = new TodosCollection(data);
Events = require('events/events');
Dispatcher = require('events/dispatcher');

TodoStore = {
  todos: todos,

  add: function (todo) {
    Dispatcher.trigger(Events.EVENT_RECEIVED, {
      eventName: 'Events.ADD',
      className: 'Actions',
      action: 'add todo',
      fired: false
    });

    this.todos.add({ task: todo});

    Dispatcher.trigger(Events.COMPLETE);

    Dispatcher.trigger(Events.EVENT_FIRED, {
      eventName: 'Events.COMPLETE',
      className: 'TodoStore',
      action: 'add todo',
      fired: true
    });
  },

  remove: function (todo) {
    Dispatcher.trigger(Events.EVENT_RECEIVED, {
      eventName: 'Events.REMOVE',
      className: 'Actions',
      action: 'remove todo',
      fired: false
    });

    this.todos.remove(todo.cid);

    Dispatcher.trigger(Events.COMPLETE);

    Dispatcher.trigger(Events.EVENT_FIRED, {
      eventName: 'Events.COMPLETE',
      className: 'TodoStore',
      action: 'remove todo',
      fired: true
    });
  }
};

Dispatcher.on(Events.REMOVE, TodoStore.remove, TodoStore);
Dispatcher.on(Events.ADD, TodoStore.add, TodoStore);

module.exports = TodoStore;