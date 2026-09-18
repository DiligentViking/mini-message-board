const queries = require('../db/queries');

// const messages = [
//   {
//     text: 'Hi there!',
//     author: 'Amando',
//     added: new Date(),
//   },
//   {
//     text: 'Hello World!',
//     author: 'Charles',
//     added: new Date(),
//   },
// ];

// Read

exports.messageList = async (req, res) => {
  const messages = await queries.getAllMessages();
  res.render('index', { title: 'Message Aegis', messages });
};

exports.messageDetails = async (req, res) => {
  const id = req.params.id;
  const message = await queries.getMessage(id);
  console.log('message:', message);

  res.render('msg', { title: 'Message Data', message });
};

// Create

// exports.messageNewGet = (req, res) => {
//   res.render('newMsg', { title: 'New Message', messages });
// };

// exports.messageNewPost = (req, res) => {
//   messages.push({
//     author: req.body.author,
//     text: req.body.message,
//     added: new Date(),
//   });

//   res.redirect('/');
// };
