// Import ...
const express = require('express')
const redis = require('redis')

const app = express() // an instance of express
const client = redis.createClient() // a connection to the Redis server

// Initialize 'visits' to be 0 when the server just started running
client.set('visits', 0)

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits)
    client.set('visits', parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listening on port 8081...')
})