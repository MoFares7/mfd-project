// models/UserModel.js
const User = require('./User.js');

class UserModel {
        static async getUser() {
                try {
                        const users = await User.findAll();
                        return users;
                } catch (error) {
                        console.error('Error fetching users:', error);
                        throw error;
                }
        }

        static async createUser(userData) {
                try {
                        console.log('Adding user with data:', userData);
                        const newUser = await User.create(userData);
                        console.log('User added successfully:', newUser);
                        return newUser;
                } catch (e) {
                        console.error('Error adding user:', e);
                        throw e;
                }
        }


        static async deleteUser(id) {
                try {
                        const user = await User.destroy({
                                where: { id: id }
                        });
                        
                        return user;
                } catch (error) {

                }
        }
}

module.exports = UserModel;
