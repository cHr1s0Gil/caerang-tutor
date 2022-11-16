const funcModel = require("../model/func");
const funcExistModel = require("../model/funcExist");

module.exports = {
    getAllFuncCtrl: async (req, res) => {
        try {
            const allFuncResponse = await funcModel.getAllFunc();
            res.send(allFuncResponse);
        } catch (error) {
            res.send("함수 검색 오류 발생");
            console.error(error);
        }
    },

    postFuncCtrl: async (req, res) => {
        try {
            const data = req.body;
            req.body.date = require("../server/service/date").getCurrentTime();
            const values = [];
            for (key in data)
                values.push(data[key]);

            const postFuncResponse = await funcModel.postFunc(values);
            res.send(postFuncResponse);
        } catch (error) {
            res.send("함수 추가 오류 발생");
            console.error(error);
        }
    },

    updateFuncCtrl: async (req, res) => {

    },

    deleteFuncCtrl: async (req, res) => {
        try {
            const fCode = req.body.fCode;
            const existFuncResponse = await funcExistModel.funcExistByCode(fCode);
            if (existFuncResponse) {
                const deleteFuncResonse = await funcModel.deleteFunc(fCode);
                res.send(deleteFuncResonse);
            }
            else res.send("존재하지 않는 함수 입니다.");
        } catch (error) {
            res.send("함수 삭제 오류 발생");
            console.error(error);
        }
    }
};