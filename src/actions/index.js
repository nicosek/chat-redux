export default function () {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}
