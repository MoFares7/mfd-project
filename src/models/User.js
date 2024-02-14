const db = require("../../config/db.js");

class UserModel {
        static async getUser() {
                return new Promise((resolve, reject) => {
                        db.query("select * from user", [], (error, result) => {
                                if (error) {
                                        reject(error);
                                } else {
                                        resolve(result);
                                }
                        });
                });
        }
}


module.exports = UserModel;