var Dispatcher, Events, Actions;

Dispatcher = require('events/dispatcher');
Events = require('events/events');

Actions = {
  remove: function (todo) {
    Dispatcher.trigger(
      Events.REMOVE,
      todo
    );
  },

  add: function (todo) {
    Dispatcher.trigger(
      Events.ADD,
      todo
    );
  }
};
module.exports = Actions;