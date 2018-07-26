const { CommandProcessor } = require('./my-bot/command-processor');

let hiddenMessages = [];

function getBotResponce(msg) {
  let commandProcessor = new CommandProcessor();
  let result = null;

  //react on @bot msgs
  let botName = '@bot';
  if (msg.trim().startsWith(botName)) {
    let preparedUserInput = msg
      .replace(/[ ]+/, ' ').trim()
      .replace(/[\n]+/, '').trim()
      .substr(botName.length).trim();

    result = commandProcessor.process(preparedUserInput);
  }

  return result;
}

//Chain
let middleware = target => (...args) => {
  let responces = args
    .map(x => getBotResponce(x.text))
    .filter(x => x)
    .map(x => ({ name: 'Bot', nickName: 'bot', text: x, date: new Date() }));

  let msgsToPush = [...args, ...responces];

  return target.push(...msgsToPush);
}

let proxyHook = {
  get(target, prop) {
    if (prop == 'push') {
      return middleware(target);
    }

    return target[prop];
  }
};

let messages = new Proxy(hiddenMessages, proxyHook);

module.exports = { messages };