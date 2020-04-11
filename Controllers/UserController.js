const UserModel = require('../Models/UserModel')

const getUser = async (app, req, res) => {

    const getUser = await UserModel.getUser()
    res.send(getUser)
}

const getUserById = async (app, req, res) => {

    const id = Number(req.params.id)
    const getUserById = await UserModel.getUserById(id);
    res.send(getUserById)
}

module.exports = {
    getUser,
    getUserById
};