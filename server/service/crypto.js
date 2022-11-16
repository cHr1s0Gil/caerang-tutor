const crypto = require("crypto");

const createSalt = async () => {
    try {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(64, (error, buf) => {
                if (error) reject(error);
                resolve(buf.toString("base64"));
            });
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createHashPassword: (password, salt = 0) => {
        try {
            return new Promise(async (resolve, reject) => {
                try {
                    if (salt === 0)
                        salt = await createSalt();
                    crypto.pbkdf2(password, salt, 512, 64, "sha512", (error, key) => {
                        if (error) reject(error);
                        resolve({ password: key.toString("base64"), salt });
                    });
                } catch (error) {
                    console.error(error);
                }
            });
        } catch (error) {
            console.error(error)
        }
    },

    createUuidv4: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
}