const express = require("express");
const indexController = require("../controller/index");
const userController = require("../controller/user");
const funcController = require("../controller/func");

const router = express.Router();

/* index 컨트롤러 */
router.get("/", indexController.getView);

/* user 컨트롤러 */
router.post("/user/signup", userController.signUpCtrl); 
router.post("/user/login", userController.loginCrtl);

/* func 컨트롤러 */
router.get("/func/all", funcController.getAllFuncCtrl);
router.get("/func/funcName/:funcName", funcController.getFuncByFuncNameCtrl);
router.get("/func/fCode/:fCode", funcController.getFuncByfCodeCrtl);
router.get("/func/author/:author", funcController.getFuncByAuthorCtrl);
router.get("/func/language/:language", funcController.getFuncByLanguageCtrl);
router.post("/func", funcController.postFuncCtrl);
router.put("/func", funcController.updateFuncCtrl);
router.delete("/func", funcController.deleteFuncCtrl);

module.exports = router;