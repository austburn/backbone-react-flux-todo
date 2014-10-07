var EventStack, Dispatcher, Events, stack, EventStore;

EventStack = require('collections/eventStack');
Dispatcher = require('events/dispatcher');
Events = require('events/events');

stack = new EventStack();

EventStore = {
  stack: stack,

  logEvent: function (e) {
    stack.add({
      eventName: e.eventName,
      className: e.className,
      action: e.action,
      fired: e.fired
    })
  }
};
Dispatcher.on(Events.EVENT_FIRED, EventStore.logEvent, EventStore);
Dispatcher.on(Events.EVENT_RECEIVED, EventStore.logEvent, EventStore);

module.exports = EventStore;