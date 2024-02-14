// controllers/UserController.js
const UserModel = require('../models/UserModel.js');

class UserController {
        static async getUsers(req, res) {
                try {
                        const users = await UserModel.getUser();
                        res.send(users);
                } catch (error) {
                        console.error(error);
                        res.status(500).send('Internal Server Error');
                }
        }
}

module.exports = UserController;
