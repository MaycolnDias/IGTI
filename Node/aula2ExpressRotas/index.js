import express from 'express';
const app = express();

app.all('/testAll', (req, res) => {
  res.send(req.method);
});
/* o sinal de interrogação significa que eu posso fazer a chamada com ou
 sem a última letra. */
app.get('/teste?', (req, res) => {
  res.send('/teste');
});
// O sinal de + significa que eu posso repetir a última letra quantas vezes quiser.
app.get('/buzz+', (req, res) => {
  res.send('/buzz+');
});
/* Os ** significam que eu posso trocar a palavra que está entre os ** 
por qualquer coisa que ele faz a chamada da mesma forma.*/
app.get('/one*Blue', (req, res) => {
  res.send(req.path);
});

/* ()? parecido com o comando que consta somente o ? porém ele deixa opcional
tudo que está dentro dos parenteses. */
app.post('/test(ing)?', (req, res) => {
  res.send('/test(ing)?');
});

//---- parametros ----

app.get('testParam/:id/:a?', (req, res) => {
  res.send(req.params.id + ' ' + re.params.a);
});

//---- parametros via query ----

app.get('/testQuery', (req, res) => {
  res.send(req.query);
});

// ---- next ----

app.get(
  '/testMultipleHandlers',
  (req, res, next) => {
    console.log('Callback 1');
    next();
  },
  (req, res) => {
    console.log('Callback 2');
    res.end();
  }
);

// ---- next com array ----

const callback1 = (req, res, next) => {
  console.log('Callback 1');
  next();
};

function callback2(req, res, next) {
  console.log('Callback 2');
  next();
}
const callback3 = (req, res) => {
  console.log('Callback 3');
  res.end();
};

app.get('/testMultipleHandlersArray', [callback1, callback2, callback3]);

// ---- route ----
app
  .route('/testRoute')
  .get((req, res) => {
    res.send('/testRoute GET');
  })
  .post((req, res) => {
    res.send('/testRoute POST');
  })
  .delete((req, res) => {
    res.send('/testRoute DELETE');
  });

app.listen(3000, () => {
  console.log('API Started!');
});
