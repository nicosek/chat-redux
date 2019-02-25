export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES': {
      if (state.messages === action.payload) {
        return state
      } else {
        return action.payload;
      }
    };
    case 'CREATE_MESSAGE': {
      function jsonCopy(src) {
        return JSON.parse(JSON.stringify(src));
      }
      let newMessages = jsonCopy(state);
      newMessages.messages.push(action.payload);
      return newMessages;
    };
    default:
      return state;
  }
}
