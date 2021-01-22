const express = require("express");

const Home = require("../controllers/Home");
const Login = require("../controllers/Login");
const Protected = require("../controllers/Protected");
const { login: loginValidation } = require("../validations/login");

const router = express.Router();

router.get("/", Home.index);
router.get("/login", Login.index);
router.get("/protected", Protected.index);
router.post("/login", loginValidation, Login.store);

module.exports = router;
