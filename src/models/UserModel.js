
const User = require('./User.js');

class UserModel {
        static async getUser() {
                try {
                        const users = await User.findAll();
                        return users;
                } catch (error) {
                        throw error;
                }
        }
}

module.exports = UserModel;
