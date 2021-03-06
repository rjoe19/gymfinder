var knex = require('knex') ({
  client: 'sqlite3',
  connection: {
    filename: './data/gym.sqlite'
  },
  useNullAsDefault: true
})

//removes a table added with the create table statement. for testing purposes
var dropSql = 'DROP TABLE IF EXISTS users;'

var createSql = [
    'CREATE TABLE users (',
    '  id VARCHAR(255) NOT NULL,',
    '  name VARCHAR(255) NOT NULL,',
    '  my_gym VARCHAR(255) NOT NULL,',
    '  my_city VARCHAR(255) NOT NULL,',
    '  mobile_number VARCHAR(255) NOT NULL UNIQUE,',
    '  email VARCHAR(255) NOT NULL UNIQUE,',
    '  password_hash VARCHAR(255) NOT NULL',

');'
  ].join(' ')

  knex.raw(dropSql).then(function (resp) {
    return knex.raw(createSql)
  }).then(function (resp) {
    process.exit()
  })

// knex.raw("select * from ").then(function (resp) {
//   console.log(resp)
//   process.exit()
// })
