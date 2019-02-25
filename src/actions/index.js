export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const message = {
    author: author,
    content: content
  };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;

  const promise = fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  }).then(response => response.json());

  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  };
}

export function setInputValue(value) {

  return {
    type: 'SET_INPUT',
    payload: value
  };
}
