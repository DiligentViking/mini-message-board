const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);

app.use((err, _, res, __) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}`);
});
