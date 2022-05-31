const { validationResult } = require("express-validator");
const User = require("../models/user");

const HttpError = require("../models/http-error");

const getUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find({}, "-password");
  } catch (error) {
    return next(
      new HttpError("Fetching users failed, please try again later.", 500)
    );
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

// This is not part of the course.
const getUserById = async (req, res, next) => {
  const userId = req.params.uid;
  let user;

  try {
    user = await User.findOne({ id: userId }, "-password");
  } catch (error) {
    return next(
      new HttpError("Fetching user failed, please try again later.", 500)
    );
  }

  if (!user) {
    return next(
      new HttpError("Could not find a user with the provided id.", 404)
    );
  }

  res.json(user.toObject({ getters: true }));
};

const signupUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed.", 422));
  }

  const { name, email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return next(
      new HttpError("Signing up failed, please try again later.", 500)
    );
  }

  if (existingUser) {
    return next(new HttpError("User exists already, login insteady.", 422));
  }

  const createdUser = new User({
    name,
    email,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTE5MjM5MzM3M15BMl5BanBnXkFtZTYwOTEzOTY0._V1_UY317_CR6,0,214,317_AL_.jpg",
    password, // This needs encryption.
    places: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Creating user failed, try again.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return next(new HttpError("Login failed, please try again later.", 500));
  }

  if (!existingUser || existingUser.password !== password) {
    return next(new HttpError("Invalid credentials.", 401));
  }

  res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.signupUser = signupUser;
exports.loginUser = loginUser;
