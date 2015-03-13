var Footer = require('./Footer.react');
var Header = require('./Header.react');
var React = require('react');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      allTodos: {}
    };
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    return (
      <div>
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  },
  _onChange: function() {
  }
});

module.exports = TodoApp;
