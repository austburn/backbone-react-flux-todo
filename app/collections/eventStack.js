var Backbone, Event, EventStack;

Backbone = require('backbone');
Event = require('models/event');

EventStack = Backbone.Collection.extend({
  model: Event
});
module.exports = EventStack;