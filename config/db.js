// /config/db.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Thay đổi theo thông tin tài khoản MySQL của bạn
    password: '',  // Thay đổi theo thông tin tài khoản MySQL của bạn
    database: 'forest_management'  // Thay đổi theo tên cơ sở dữ liệu của bạn
});

db.connect((err) => {
    if (err) {
        console.error('MySQL Connected... ' + err.stack);
    } else {
        console.log('MySQL Connected...');
    }
});

module.exports = db;