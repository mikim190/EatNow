const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/query.js')
const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/api/restaurants/', db.getRestaurants)
app.get('/api/restaurants/:id/info/', db.getRestaurantById)
app.post('/api/restaurants/', db.createRestaurant)
app.put('/api/restaurants/:id/info', db.updateRestaurant) 
app.delete('/api/restaurants/:id/info', db.deleteRestaurant)



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
});

