var React, Modal, AddModal, $;

React = require('react');
Modal = require('react-bootstrap/Modal');
OverlayMixin = require('react-bootstrap/OverlayMixin');
Actions = require('actions');
$ = require ('jquery');

AddModal = React.createClass({
  mixins: [OverlayMixin],

  getInitialState: function () {
    return {
      isModalOpen: false,
      task: ''
    };
  },

  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },

  updateProps: function (e) {
    this.setState({
      task: e.target.value
    });
  },

  handleAdd: function (e) {
    Actions.add(this.state.task);
    this.handleToggle();
  },

  render: function () {
    return React.DOM.span(
      {
        className: 'small glyphicon glyphicon-plus',
        style: {'margin-left': '10px'},
        onClick: this.handleToggle
      }
    )
  },

  renderOverlay: function () {
    if (!this.state.isModalOpen) {
      return React.DOM.span();
    }

    return Modal({ title: 'Add TODO', onRequestHide: this.handleToggle},
      new React.DOM.div({className: 'modal-body'}, new React.DOM.form({},
        new React.DOM.label({}, 'Task: '),
        new React.DOM.input({style: {'margin-left': '5px'}, id: 'taskInput', onChange: this.updateProps})
      )),
      new React.DOM.div({className: 'modal-footer'},
        new React.DOM.button({className: 'btn btn-primary', onClick: this.handleAdd}, 'Add'),
        new React.DOM.button({className: 'btn btn-cancel', onClick: this.handleToggle}, 'Close')
      )
    );
  }
})
module.exports = AddModal;