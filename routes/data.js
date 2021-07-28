const{ getData, welcomeMsg, addStudent, deleteStudent, updateStudent } = require('../controllers/dataController') //importing the functions from dataController.js

function dataRoutes (fastify, options, done) {

    fastify.get('/', welcomeMsg)

    fastify.get('/report', getData)

    fastify.post('/add', addStudent)

    fastify.post('/update', updateStudent)

    fastify.delete('/delete/:id', deleteStudent)

    done()
}

module.exports = dataRoutes
