const pool = require("../server/config/dbConfig");

module.exports = {
    userExist: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if(error) throw error;
                    
                    const sql = "SELECT * FROM 유저 WHERE 학번 = ? OR 이름 = ?";
                    connection.query(sql, data, (error, row) => {
                        if(error) throw error;
                        if(row.length === 0) resolve(false);
                        else resolve(true);
                    });
                    connection.release();
                });
            });
        } catch(error) {
            console.error(error);
        }
    }
};