const express = require("express");
const { check } = require("express-validator");
const usersControllers = require("../controllers/users-controller");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.get("/:uid", usersControllers.getUserById);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.signupUser
);

router.post("/login", usersControllers.loginUser);

module.exports = router;
