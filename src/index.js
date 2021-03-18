const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') res.send('GET requests are disabled')
//     else next()
// })

// app.use((req, res, next) => {
//     res.status(503).send('App is in maintenance')
// })

app.use(express.json())
app.use(userRouter, taskRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
