var Backbone, _, TodosCollection, data, todos, Dispatcher;

Backbone = require('backbone');
_ = require('underscore');
Events = require('events/events');

Dispatcher = _.clone(Backbone.Events);

_.extend(Dispatcher, {
  registerView: function (callback) {
    this.on(Events.COMPLETE, callback);
  }
});

module.exports = Dispatcher;