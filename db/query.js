const Pool = require('pg').Pool

const pool = new Pool({
  user: 'kim200',
  host: 'localhost',
  database: 'restaurant_info',
  port: 5432, 
});

const getRestaurantById = id => new Promise((resolve,reject) => {
    console.log('id is', id)
    pool.query(`SELECT * FROM restaurant WHERE id = $1`,[id],(error, results) => {
      if (error) {
        reject(error)
      } else {
        console.log('data result', results.rows)
        resolve(results.rows)
      }
    });
});


module.exports = {
    getRestaurantById,
}