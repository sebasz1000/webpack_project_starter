export var generateService = messages => {
  return messages[Math.floor(Math.random() * messages.length)];
};
