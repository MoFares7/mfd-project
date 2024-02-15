// models/UserModel.js
const User = require('./User.js');

class AuthModel {
        static async register() {
                try {
                        const users = await User.findAll();
                        return users;
                } catch (error) {
                        console.error('Error when create new account:', error);
                        throw error;
                }
        }

      
}

module.exports = AuthModel;
