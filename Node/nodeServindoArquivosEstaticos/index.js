import express from 'express';

const app = express();
app.use(express.json());

// Servindo acesso a pasta public para acessar o que consta dentro ex: imagem.
app.use(express.static('public'));

//Definindo que essa rota será acessada por um caminho virtual "/images" e passando
app.use('/images', express.static('public'));

app.listen(3000, () => {
  console.log('API Started!');
});
