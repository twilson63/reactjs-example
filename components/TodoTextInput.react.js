var React = require('react');
var ENTER_KEY_CODE = 13;
var TodoTextInput = React.createClass({

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },
  render: function() /*object*/ {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />      
    );
  },
  _save: function() {},
  _onChange: function(event) {},
  _onKeyDown: function(event) {}
});

module.exports = TodoTextInput;
