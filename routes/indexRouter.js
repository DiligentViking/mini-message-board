// RENAME USER TO AUTHOR!
// CONTINUE: Set up database stuff in this project (use "using-postgresql" proj for reference)

const { Router } = require('express');
const indexRouter = Router();

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

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Message Aegis', messages });
});

indexRouter.get('/message-:id', (req, res) => {
  const msgId = req.params.id;
  const msg = messages[msgId];

  res.render('msg', { title: 'Message Data', msg });
});

indexRouter.get('/new', (req, res) => {
  res.render('newMsg', { title: 'New Message', messages });
});

indexRouter.post('/new', (req, res) => {
  messages.push({
    author: req.body.author,
    text: req.body.message,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = indexRouter;
