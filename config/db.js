const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
});

module.exports = sequelize;







// const mysql = require('mysql');

// const db = mysql.createPool({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "express"
// });

// module.exports = {
//         query: (sql, values, callback) => {
//                 db.getConnection((err, connection) => {
//                         if (err) {
//                                 return callback(err);
//                         }
//                         connection.query(sql, values, (error, results) => {
//                                 connection.release();
//                                 callback(error, results);
//                         });
//                 });
//         }
// };
