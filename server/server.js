require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const db = require('../db/query.js')
const PORT = 3005;
const app = express();
const { getRestaurantById } = require('../db/query.js');

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/restaurants/:id/info/', (req, res) => {
  const { id } = req.params;

  getRestaurantById(id)
    .then(([data]) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// app.post('/api/restaurants/', (req, res) => {
//   // console.log('hello: ', req.body)
//   db.createRestaurant (req.body)
//     .then (([data]) => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.send(err)
//     });
//   });

// app.put('/api/restaurants/:id/info', db.updateRestaurant) 
// app.delete('/api/restaurants/:id/info', db.deleteRestaurant)



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
});



