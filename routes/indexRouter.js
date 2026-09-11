const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send('Hello, world');
});

// TODO: '/new'

module.exports = indexRouter;
