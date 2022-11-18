const cryptoModel = require("../server/service/crypto");
const userModel = require("../model/user");
const userExistModel = require("../model/userExist");

module.exports = {
    signUpCtrl: async (req, res) => {
        try {
            const userInfo = [req.body.studentId, req.body.name];
            const userExistResponse = await userExistModel.userExist(userInfo);
            if (userExistResponse) {
                res.send("이미 존재하는 사용자 입니다.");
                return;
            }

            const uuidv4 = cryptoModel.createUuidv4();
            const originPwd = req.body.password;
            const cryptoPwd = await cryptoModel.createHashPassword(originPwd);
            const userData = {
                uid: uuidv4,
                name: req.body.name,
                password: cryptoPwd.password,
                studentId: req.body.studentId,
                team: req.body.team,
                salt: cryptoPwd.salt
            };

            const values = [];
            for (k in userData)
                values.push(userData[k]);

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
            if (cryptoPwd.password === userExistResponse[0].비밀번호) {
                const userResponse = {
                    "name": userExistResponse[0].이름,
                    "password": userExistResponse[0].비밀번호,
                    "studentId": userExistResponse[0].학번,
                    "team": userExistResponse[0].소속팀
                };
                res.send(userResponse);
            }
            else res.send({ "errMsg": "비밀번호가 일치하지 않습니다." });

        } catch (error) {
                res.send(error);
                console.error(error);
            }
        },

        withdrawalCtrl: (req, res) => {

        }
    };