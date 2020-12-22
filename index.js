const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var userRouter = require("./routes/user.route");
var authRouter = require("./routes/auth.route");
express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Hoang Anh Nguyen",
  });
});

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
