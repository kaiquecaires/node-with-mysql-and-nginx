const express = require('express')
const mysql = require('mysql')
const faker = require('faker')

const app = express()
const PORT = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'dbfullcycle'
}

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  connection.query(`INSERT INTO people (name) VALUES ("${faker.name.findName()}")`)

  connection.query('SELECT name FROM people', (_error, docs) => {
    const html = `
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${docs?.map(data => `<li>${data.name}</li>`).join('')}
      </ol>
    `

    res.send(html)
  })
})

app.listen(PORT, () => {
  console.log('SERVER IS RUNNING ON PORT:', PORT)
})

