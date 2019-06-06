const Pool = require('pg').Pool

const pool = new Pool({
  user: 'kim200',
  host: 'localhost',
  database: 'zagat_info',
  port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM restaurant FETCH FIRST 10 ROW ONLY', (error, results) => {
      if (error) {
        console.log(error)
      }
      response.status(200).json(results.rows)
    })
};

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    console.log('id is', id)
  
    pool.query(`SELECT * FROM restaurant WHERE id = ${id}`,(error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, websites, coords, addresses, phone, mon_open, mon_close,
        tue_open,tue_close,wed_open,wed_close,thu_open,thu_close,fri_open,fri_close,sat_open,sat_close,sun_open,sun_close} = request.body
  
    pool.query(`INSERT INTO restaurant (name, websites, coords, addresses, phone, mon_open, mon_close,tue_open,tue_close,wed_open,wed_close,thu_open,thu_close,fri_open,fri_close,sat_open,sat_close,sun_open,sun_close) 
    VALUES ${name, websites, coords, addresses, phone, mon_open, mon_close,
        tue_open,tue_close,wed_open,wed_close,thu_open,thu_close,fri_open,fri_close,sat_open,sat_close,sun_open,sun_close}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
};
  
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body
  
    pool.query(`UPDATE restaurant SET name = ${name} WHERE id = ${id}`,(error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
};
  
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(`DELETE FROM restaurant WHERE id = ${id}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}