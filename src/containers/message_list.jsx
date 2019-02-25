import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import fetchMessages from "../actions/index";

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
    debugger;
  }

  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.content} message={message} />
      );
    });
  }

  render() {
    return (
      <div className="message-list list-group">
        <ul className="list-group cities">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
