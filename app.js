const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const app = express();

dotenv.config();

const routes = require("./routes/router.js");

/** 서버 미들웨어 설정 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));

/** 서버 포트 설정 */
app.set("port", process.env.PORT || 3000);

/** 파일 경로 설정 */
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "public", "views"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/config", express.static(path.join(__dirname, "server", "config")));

app.use("/", routes);

app.listen(app.get("port"), () => {
    console.log(`connecting to http://localhost:${app.get("port")}`);
});
