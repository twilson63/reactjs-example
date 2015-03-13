var React = require('react');
var TodoTextInput = require('./TodoTextInput.react');

var Header = React.createClass({

  render: function() {
    return (
      <header id="header">
        <h1>todos</h1>
      </header>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = Header;
