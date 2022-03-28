const express = require("express");
const userController = require("./controllers/user.controller")
const postController = require("./controllers/post.controller")

const register = require("./controllers/auth.controller")
const login = require("./controllers/auth.controller")

const app = express();

app.use(express.json());


app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

app.use("/post", postController)
