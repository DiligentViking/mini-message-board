const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.set('views', './views'); // may need to use __dir path instead
app.set('view engine', 'ejs');

const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);

app.use((err, _, res, __) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', (error) => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}`);
});
