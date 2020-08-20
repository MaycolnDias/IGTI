import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
  try {
    throw new Error('Erro message test');
  } catch {
    next(err);
  }
});

app.post('/', async (req, res, next) => {
  throw new Error('Erro message async');
});

app.use((err, req, res, next) => {
  console.log('Error 1');
  next(err);
});

app.use((err, req, res, next) => {
  console.log('Error 2');
  res.status(500).send('Ocorreu um erro, tente novamente!');
});

app.listen(3000, () => {
  console.log('API Started!');
});
