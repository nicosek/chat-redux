import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

class MessageList extends Component {
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

export default connect(mapStateToProps)(MessageList);
