var Backbone, Todo;

Backbone = require('backbone');

Todo = Backbone.Model.extend({
  defaults: {
    title: 'Todo',
    task: 'I have todo this.',
    date: 0
  }
});
module.exports = Todo;