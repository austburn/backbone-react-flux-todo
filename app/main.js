var Backbone, $, Router, React;

Backbone = require('backbone');
$ = require('jquery');
Backbone.$ = $;
Router = require('routers/router');

React = require('react');
window.React = React;

$(document).ready(function () {
  console.log('initialize app');
  var router = new Router();
  Backbone.history.start({
    pushState: true,
    root: '/'
  });
});