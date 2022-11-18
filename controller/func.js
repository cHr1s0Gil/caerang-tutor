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

    getFuncByfCodeCrtl: async (req, res) => {
        try {
            const fCode = req.params.fCode;
            const getFuncResponse = await funcModel.getFuncByfCode(fCode);

            res.send(getFuncResponse);
        } catch(error) {
            res.send("함수 검색 오류 발생");
            console.error(error);
        }
    },

    getFuncByFuncNameCtrl: async (req, res) => {
        try {
            const funcName = req.params.funcName;
            const getFuncResponse = await funcModel.getFuncByFuncName(funcName);

            res.send(getFuncResponse);
        } catch(error) {
            res.send("함수 검색 오류 발생");
            console.error(error);
        }
    },

    getFuncByAuthorCtrl: async (req, res) => {
        try {
            const author = req.params.author;
            const getFuncResponse = await funcModel.getFuncByAuthor(author);

            res.send(getFuncResponse);
        } catch(error) {
            res.send("함수 검색 오류 발생");
            console.error(error);
        }
    },

    getFuncByLanguageCtrl: async (req, res) => {
        try {
            const language = req.params.language;
            const getFuncResponse = await funcModel.getFuncByLanguage(language);

            res.send(getFuncResponse);
        } catch(error) {
            console.error(error);
        }
    },

    postFuncCtrl: async (req, res) => {
        try {
            const existValue = [req.body.funcName, req.body.author, req.body.language];
            const postExistResponse = await funcExistModel.postFuncExist(existValue);

            if (postExistResponse) {
                res.send("해당 함수가 이미 존재합니다.");
                return;
            }

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
        try {
            const fCode = req.body.fCode;
            if(fCode === undefined) {
                res.send("함수 코드가 잘못되었습니다.");
                return;
            }
            const funcExistResponse = await funcExistModel.funcExistByCode(fCode);
            if (!funcExistResponse) {
                res.send("함수가 존재하지 않습니다.");
                return;
            }

            const data = [req.body.funcName, req.body.detail, req.body.content, require("../server/service/date").getCurrentTime(), fCode];
            const updateFuncResponse = await funcModel.updateFunc(data);

            res.send(updateFuncResponse);
            
        } catch (error) {
            console.error(error);
        }
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