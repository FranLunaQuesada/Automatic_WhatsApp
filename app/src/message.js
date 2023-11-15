function sendMessage(client, contact, message) {
  return client.sendMessage(contact, message);
}

module.exports = {
  sendMessage,
};
