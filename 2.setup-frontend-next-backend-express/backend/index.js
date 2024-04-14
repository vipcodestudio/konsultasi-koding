const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Success',
  });
});

app.get('/products', (req, res) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Success',
    data: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
      },
      {
        id: 4,
        name: 'Product 4',
        price: 400,
      },
    ],
  });
});

app.listen(port, console.log(`Listening on port ${port}`));
