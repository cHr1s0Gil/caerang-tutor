const pool = require("../server/config/dbConfig");

module.exports = {
    postFuncExist: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "SELECT 분류코드 FROM 함수 WHERE 함수이름 = ? AND 작성자 = ? AND 언어 = ?";
                    connection.query(sql, data, (error, row) => {
                        if (error) reject(error);
                        if (row.length === 0) resolve(false);
                        else resolve(true);
                    });
                    connection.release();
                });
            });
        } catch (error) {
            console.error(error);
        }
    },

    funcExistByCode: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) reject(error);

                    const sql = "SELECT * FROM 함수 WHERE 분류코드 = ?";
                    connection.query(sql, data, (error, row) => {
                        if (error) reject(error);
                        if (row.length === 0) resolve(false);
                        else resolve(true);
                    });
                    connection.release();
                });
            });
        } catch (error) {
            console.error(error);
        }
    },
}