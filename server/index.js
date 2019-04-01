const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mc = require('./controllers/messages_controller')

app.use( bodyParser.json())

app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', mc.createMessage)
app.get('/api/messages', mc.readMessage)
app.put('/api/messages/:id', mc.updateMessage)
app.delete('/api/messages/:id', mc.deleteMessage)









const port = 3300
app.listen( port, () => {console.log(`Server listening on port ${port}`)})