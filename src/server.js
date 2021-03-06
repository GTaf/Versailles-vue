var express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {Sequelize, DataTypes, json} = require('sequelize')

var app = express()
app.use(cors())
app.use(bodyParser.json())



// For ease of this tutorial, we are going to use SQLite to limit dependencies
let database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite'
})

// Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
let Measures = database.define('measures', {
  date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  sensorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

let Sensor = database.define('sensor', {
  sensorName: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

app.get('/:id/', async function(req, res) {
  var measures = await Measures.findAll({
    raw: true,
    attributes: ['value'],
    where: {
      sensorId: parseInt(req.params.id)
    }
  });
  obj = JSON.stringify(measures)
  res.send(obj)
  //res.send(JSON.stringify(Object.keys(measures).map(function (key) { return measures[key]; })))
  //res.send(JSON.stringify(Object.values(measures)))
});

// Resets the database and launches the express app on :8081
database
  .sync({ alter: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
  })

