var Backbone, _, Events, Todo, dispatcher, Todos;

Backbone = require('backbone');
Todo = require('models/todo');

Todos = Backbone.Collection.extend({
  model: Todo
});
module.exports = Todos;