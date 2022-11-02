const express = require("express");
const indexController = require("../controller/index");
const funcController = require("../controller/func");

const router = express.Router();

router.get("/", indexController.getView);
router.get("/func", funcController.getFunc);
router.get("/func/all", funcController.getAllFunc);
router.post("/func", funcController.postFunc);

module.exports = router;