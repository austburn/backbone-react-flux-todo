var React, Header;

React = require('react');
AddModal = require('views/addModal');

Header = React.createClass({
  render: function () {
    return React.DOM.h1({style: {'color': '#fff'}}, 'TODOS',
      new AddModal()
    );
  }
});
module.exports = Header;