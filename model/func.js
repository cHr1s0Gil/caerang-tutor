const pool = require("../server/config/dbConfig");

module.exports = {
    getFuncCode: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "SELECT * FROM 함수 WHERE 함수이름 = ? AND 작성자 = ? AND 언어 = ?";
                    connection.query(sql, data, (error, row) => {
                        if (error) throw error;
                        resolve(row);
                    });
                    connection.release();
                });
            });
        } catch (error) {

        }
    },

    getAllFunc: () => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "SELECT * FROM 함수";
                    connection.query(sql, (error, row) => {
                        if (error) reject(error);
                        resolve(row);
                    });
                    connection.release();
                })
            })
        } catch (error) {
            console.error(error);
        }
    },

    getFuncByfCode: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "SELECT * FROM 함수 WHERE 분류코드 = ?";
                    connection.query(sql, data, (error, row) => {
                        if (error) reject(error);
                        resolve(row);
                    });
                    connection.release();
                })
            })
        } catch (error) {
            console.error(error);
        }
    },

    getFuncByFuncName: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const keyWord = data + "%";
                    const sql = "SELECT * FROM 함수 WHERE 함수이름 LIKE ?";
                    connection.query(sql, keyWord, (error, row) => {
                        if (error) reject(error);
                        resolve(row);
                    });
                    connection.release();
                });
            });
        } catch (error) {
            console.error(error);
        }
    },

    getFuncByAuthor: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "SELECT * FROM 함수 WHERE 작성자 = ?";
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
    },

    getFuncByLanguage: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "SELECT * FROM 함수 WHERE 언어 = ?";
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
    },

    postFunc: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;
                    const sql = "INSERT INTO 함수 (함수이름, 함수설명, 함수코드, 작성자, 언어, 업데이트날짜) VALUE (?)";
                    connection.query(sql, [data], (error, row) => {
                        if (error) reject(error);
                        resolve("함수 추가 성공");
                    });
                    connection.release();
                });
            });
        } catch (error) {
            console.error(error);
        }
    },

    updateFunc: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "UPDATE 함수 SET 함수이름 = ?, 함수설명 = ?, 함수코드 = ?, 업데이트날짜 = ? WHERE 분류코드 = ?";
                    connection.query(sql, data, (error, row) => {
                        if (error) reject(error);
                        resolve("함수 업데이트 완료");
                    });
                    connection.release();
                });
            });
        } catch (error) {
            console.error(error);
        }
    },

    deleteFunc: (data) => {
        try {
            return new Promise((resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) throw error;

                    const sql = "DELETE FROM 함수 WHERE 분류코드 = ?";
                    connection.query(sql, data, (error, row) => {
                        if (error) reject(error);
                        resolve("함수 삭제 성공");
                    });
                    connection.release();
                });
            });
        } catch (error) {
            console.error(error);
        }
    }
}