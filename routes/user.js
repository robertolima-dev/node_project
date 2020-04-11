const UserController = require('../Controllers/UserController')

module.exports = app => {

    app.get('/user', (req, res) => {
        UserController.getUser(app, req, res)
    })

    app.get('/user/:id', (req, res) => {
        UserController.getUserById(app, req, res)
    })
}