import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from './message_form';
import { fetchMessages } from "../actions/index";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.messages.channel);
  }

  componentDidMount() {
    setInterval(() => { this.props.fetchMessages(this.props.messages.channel); this.scrollDown(); }, 30000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  renderList() {
    return this.props.messages.messages.map((message) => {
      return (
        <Message key={message.created_at} message={message} />
      );
    });
  }

  scrollDown() {
    this.list.scrollTop = this.list.scrollHeight;
    return;
  }

  render() {
    if (!this.props.messages.messages || this.props.messages.messages.length === 0) {
      return (
        <div>
          <p>Nothing yet!</p>
          <MessageForm />
        </div>
      );
    } else {
      return (
        <div className="message-list list-group">
          <ul className="list-group messages" ref={(list) => { this.list = list; }}>
            {this.renderList()}
          </ul>
          <div>
            <MessageForm />
          </div>
        </div>
      );
    }
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
