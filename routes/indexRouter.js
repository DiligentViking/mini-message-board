const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Message Aegis', messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('newMsg', { title: 'New Message', messages });
});

indexRouter.post('/new', (req, res) => {
  messages.push({
    user: req.body.author,
    text: req.body.message,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = indexRouter;
