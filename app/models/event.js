var Backbone, Event;

Backbone = require('backbone');

Event = Backbone.Model.extend({
  defaults: {
    eventName: '',
    className: '',
    action: '',
    fired: false
  },

  toString: function () {
    return this.get('eventName') + ' was called from ' + this.get('className') + ' and initiated ' + this.get('action');
  }
});
module.exports = Event;