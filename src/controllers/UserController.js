const userModel = require("../models/User.js");

class UserController {
        static async getUsers(req, res) {
                try {
                        var result = await userModel.getUser();
                        res.send(result);
                } catch (error) {
                        console.error(error);
                        res.status(500).send("Internal Server Error");
                }
        }
}

module.exports = UserController;
