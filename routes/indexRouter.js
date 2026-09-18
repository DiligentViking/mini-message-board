// CONTINUE: Set up database stuff in this project (use "using-postgresql" proj for reference)

const { Router } = require('express');
const indexRouter = Router();

const indexController = require('../controllers/indexController');

indexRouter.get('/', indexController.messageList);

indexRouter.get('/message-:id', indexController.messageDetails);

indexRouter.get('/new', indexController.messageNewGet);
indexRouter.post('/new', indexController.messageNewPost);

module.exports = indexRouter;
