const messages = [
  {
    text: 'Hi there!',
    author: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    author: 'Charles',
    added: new Date(),
  },
];

exports.messageList = (req, res) => {
  res.render('index', { title: 'Message Aegis', messages });
};

exports.messageDetails = (req, res) => {
  const msgId = req.params.id;
  const msg = messages[msgId];

  res.render('msg', { title: 'Message Data', msg });
};

exports.messageNewGet = (req, res) => {
  res.render('newMsg', { title: 'New Message', messages });
};

exports.messageNewPost = (req, res) => {
  messages.push({
    author: req.body.author,
    text: req.body.message,
    added: new Date(),
  });

  res.redirect('/');
};
