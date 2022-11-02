const funcModel = require("../model/func");

const type = {
    FUNC_NAME: "funcName",
    AUTHOR: "author"
};

module.exports = {
    getAllFunc: async (req, res) => {
        try {
            const response = await funcModel.getAllFunc();
            res.send(response);
        } catch(error) {
            console.error(error);
        }
    },

    getFunc: async (req, res) => {
        const query = req.query;
        const searchType = query.searchType;
        const keyWord = query.keyWord;

        try {
            const response = await funcModel.getFunc(searchType, keyWord);
            res.send(response);
        } catch(error) {
            console.error(error);
        }
    },

    postFunc: async (req, res) => {
        const query = req.query;
        const params = {
            funcName: query.funcName,
            description: query.description,
            content: query.content,
            author: query.author,
            language: query.language,
            date: query.date
        }

        try {
        const result = await funcModel.postFunc(params);
        res.send(result);
        } catch(error) {
            console.error(error);
        }
    }
}

