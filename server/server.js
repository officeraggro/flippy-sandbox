const express = require('express')
const cors = require('cors')
const port = 8080

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the root route!')
})


app.listen((port), () => {
    console.log(`Express server listening on port ${port}`)
})