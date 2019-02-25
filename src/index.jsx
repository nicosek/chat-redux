// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import usernameReducer from './reducers/username_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import messagesReducer from './reducers/messages_reducer';
import inputValueReducer from './reducers/input_value_reducer';

const reducers = combineReducers({
  username: usernameReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer,
  inputValue: inputValueReducer
});

const initialMessages = {
  channel: "general",
  messages: [
    {
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z"
    },
    {
      author: "anonymous77",
      content: "Hey man!!",
      created_at: "2017-09-26T23:03:21.194Z"
    }
  ]
}

const initialState = {
  username: window.prompt("What's your name?", "Albert"),
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  messages: initialMessages,
  inputValue: ''
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
