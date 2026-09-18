const queries = require('../db/queries');

// Read

exports.messageList = async (req, res) => {
  const messages = await queries.getAllMessages();
  res.render('index', { title: 'Message Aegis', messages });
};

exports.messageDetails = async (req, res) => {
  const id = req.params.id;
  const message = await queries.getMessage(id);

  res.render('msg', { title: 'Message Data', message });
};

// Create

exports.messageNewGet = (req, res) => {
  res.render('newMsg', { title: 'New Message' });
};

exports.messageNewPost = async (req, res) => {
  const author = req.body.author;
  const text = req.body.text;

  await queries.insertMessage(author, text);

  res.redirect('/');
};
