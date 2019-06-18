const Pool = require('pg').Pool

const pool = new Pool({
  user: 'kim200',
  host: '127.0.0.1',
  database: 'restaurant_info',
  port: 5432, //default TCP for PostgreSQL
});

const getRestaurantById = id => new Promise((resolve,reject) => {
  pool.query(`SELECT * FROM restaurant WHERE id = $1`,[id],(error, results) => {
    if (error) {
      reject(error)
    } else {
      // console.log(results.rows)
      resolve(results.rows)
    }
  });
});

    

// const createRestaurant = data => new Promise((resolve,reject) => {
//     const { name, websites, coords, addresses, phone, mon_open, mon_close,tue_open,tue_close,wed_open,wed_close,thu_open,thu_close,fri_open,fri_close,sat_open,sat_close,sun_open,sun_close} = data;
//    console.log('data: ', data)
//     var method = `INSERT INTO restaurant(name, websites, coords, addresses, phone, mon_open, mon_close, tue_open, tue_close, 
//         wed_open, wed_close, thu_open, thu_close, fri_open, fri_close, sat_open, sat_close, sun_open, sun_close) 
//         VALUES ('${name}', '${websites}', '${coords}', '${addresses}', '${phone}', ${mon_open}, 
//             ${mon_close},${tue_open},${tue_close},${wed_open},${wed_close},${thu_open},
//             ${thu_close},${fri_open},${fri_close},${sat_open},${sat_close},${sun_open},${sun_close})`;
   
//         pool.query(method, (error,results) => {
//             if (error) {
//               reject(error)
//             }
        
//              resolve(results.rowCount)
//         });  
// });

// const getRestaurants = (request, response) => {
//     pool.query('SELECT * FROM restaurant FETCH FIRST 10 ROW ONLY', (error, results) => {
//       if (error) {
//         console.log(error)
//       }
//       response.status(200).json(results.rows)
//     })
// };

// const getRestaurantById = (request, response) => {
//     const id = parseInt(request.params.id)
//     pool.query(`SELECT * FROM restaurant WHERE id = $1`,[id],(error, results) => {
//       if (error) {
//         console.log(error)
//       } else {
//         console.log('data result', results.rows)
//         response.status(201).send(results.rows)
//       }
//     })
// }

// const createRestaurant = (request, response) => {
//     const { name, websites, coords, addresses, phone, mon_open, mon_close,tue_open,tue_close,wed_open,wed_close,thu_open,thu_close,fri_open,fri_close,sat_open,sat_close,sun_open,sun_close} = request.body;
   
//     var method = `INSERT INTO restaurant(name, websites, coords, addresses, phone, mon_open, mon_close, tue_open, tue_close, 
//         wed_open, wed_close, thu_open, thu_close, fri_open, fri_close, sat_open, sat_close, sun_open, sun_close) 
//         VALUES ('${name}', '${websites}', '${coords}', '${addresses}', '${phone}', ${mon_open}, 
//             ${mon_close},${tue_open},${tue_close},${wed_open},${wed_close},${thu_open},
//             ${thu_close},${fri_open},${fri_close},${sat_open},${sat_close},${sun_open},${sun_close})`;
   
//         pool.query(method, (error,results) => {
//             if (error) {
//                 console.log((error))
//             }
//             response.status(201).send(results)
//         });  
// };
  
// const updateRestaurant = (request, response) => {
//     const id = parseInt(request.params.id)
//     const name = (request.query.name)
//     pool.query('UPDATE restaurant SET name=$1 WHERE id=$2', [name,id],(error) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`User modified with ID: ${id}`)
//       }
//     )
// };
  
// const deleteRestaurant = (request, response) => {
//     const id = parseInt(request.params.id)
//     pool.query(`DELETE FROM restaurant WHERE id = ${id}`, (error) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User deleted with ID: ${id}`)
//     })
// };

module.exports = {
    // getRestaurants,
    getRestaurantById,
    // createRestaurant,
    // updateRestaurant,
    // deleteRestaurant,
}