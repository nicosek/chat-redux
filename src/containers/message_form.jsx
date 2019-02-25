import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import { createMessage, setInputValue, fetchMessages } from "../actions/index";

class MessageForm extends Component {

  handleChange = (event) => {
    this.props.setInputValue(event.target.value);
  }
  handleSubmit = (event) => {
    this.props.createMessage('general', this.props.username, this.props.value);
    this.props.setInputValue('');
  }

  render() {
    return (
      <div className="message-form">
        <input type="text" value={this.props.value} onChange={this.handleChange} />
        <button name="Send" onClick={ this.handleSubmit }>Send</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.inputValue,
    username: state.username
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setInputValue, createMessage, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
