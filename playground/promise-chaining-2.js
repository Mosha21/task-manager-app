require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('60208e6a78e1311d0888d314').then(() => {
//     return Task.countDocuments({ completed: false })
// })
// .then((result) => {
//     console.log(result)
// })
// .catch(error => console.log(error))

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6025d560dff17e26ac3fd6eb').then(count => {
    console.log(count)
}).catch(e => console.log(e))