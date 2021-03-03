require('../src/db/mongoose')

const Task = require('../src/models/task')

Task.findByIdAndDelete('60208e6a78e1311d0888d314').then(() => {
    return Task.countDocuments({ completed: false })
})
.then((result) => {
    console.log(result)
})
.catch(error => console.log(error))