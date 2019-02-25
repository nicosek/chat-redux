export default function(state = null, action) {
  switch (action.type) {
    case 'SET_INPUT': {
      return action.payload;
    }
    default:
      return state;
  }
}
