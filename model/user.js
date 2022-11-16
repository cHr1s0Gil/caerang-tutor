const pool = require("../server/config/dbConfig");

module.exports = {
    doSignUp: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "INSERT INTO 유저 (분류코드, 이름, 비밀번호, 학번, 소속팀, salt) VALUE (?)";
                    connection.query(sql, [data], (error, row) => {
                        if (error) reject(error);
                        resolve("회원가입 성공");
                    });
                    connection.release();
                });
            });
        } catch (error) {
            console.error(error);
        }
    },

    doLogin: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "SELECT 비밀번호, salt FROM 유저 WHERE 학번 = ?";
                    connection.query(sql, data, (error, row) => {
                        if (error) reject(error);
                        resolve(row);
                    });
                    connection.release();
                });

            });
        } catch (error) {
            console.error(error);
        }
    }
};