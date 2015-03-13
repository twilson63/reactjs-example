var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');

function getTodoState() {
  return {
    allTodos: { 
      "1": {
        id: "1",
        complete: false,
        text: "FooBar"
      }
    },
    areAllComplete: false
  };
}


var TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  },
  _onChange: function() {
  }
});

module.exports = TodoApp;
