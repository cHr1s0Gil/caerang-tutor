const cryptoModel = require("../server/service/crypto");
const userModel = require("../model/user");

module.exports = {
    signUpCtrl: async (req, res) => {
        try {
            const uuidv4 = cryptoModel.createUuidv4();
            const originPwd = req.body.password;
            const cryptoPwd = await cryptoModel.createHashPassword(originPwd);
            console.log(req.body.studentId);
            const userData = {
                uid: uuidv4,
                name: req.body.name,
                password: cryptoPwd.password,
                studentId: req.body.studentId,
                team: req.body.team,
                salt: cryptoPwd.salt
            };

            const values = [];
            for (k in data)
                values.push(data[k]);

            const signUpResponse = await userModel.doSignUp(values);
            res.send(signUpResponse);
        } catch (error) {
            res.send(error);
            console.error(error);
        }

    },

    loginCrtl: async (req, res) => {
        try {
            const studentId = req.body.studentId;
            const userExistResponse = await userModel.doLogin(studentId);
            if (userExistResponse.length === 0) {
                res.send("학번이 올바르지 않습니다.");
                return;
            }

            const cryptoPwd = await cryptoModel.createHashPassword(req.body.password, userExistResponse[0].salt);
            if (cryptoPwd.password === userExistResponse[0].비밀번호)
                res.send(true);
            else
                res.send("비밀번호가 일치하지 않습니다.");

        } catch (error) {
            res.send(error);
            console.error(error);
        }
    },

    withdrawalCtrl: (req, res) => {

    }
};