const UserModel = require('../models/AuthModel.js');

class UserController {
        static async getUsers(req, res) {
                try {
                        const users = await UserModel.getUser();
                        res.send(users);
                } catch (error) {
                        console.error(error);
                        res.status(500).send(error);
                }
        }

        static async createUser(req, res) {
                try {
                        const userData = req.body;
                        const newUser = await UserModel.createUser(userData);
                        res.status(201).send(newUser);
                } catch (e) {
                        console.error(e);
                        res.status(500).send(e);
                }
        }

        static async deleteUser(req, res) {
                try {
                        const userId = req.params.id
                        const user = await UserModel.deleteUser(userId);
                        user > 0
                                ? res.status(201).send("The User is deleted")
                                : res.status(201).send("The user Not founded")
                } catch (error) {
                        res.status(500).send(error);
                }
        }
}

module.exports = UserController;
