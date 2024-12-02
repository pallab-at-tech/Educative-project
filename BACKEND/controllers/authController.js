import userModel from "../models/userModels.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (userid) => {
  return jwt.sign({ userid }, process.env.JWT_SECRET);
};

export const signUp = async (req, res) => {
  try {
    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).send({ success: false, errors: errors.array() });

    const { name, email, password } = req.body;

    //existing user
    const user = await userModel.findOne({ email });
    if (user)
      return res
        .status(400)
        .send({ success: false, message: "User already exists", user });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //creating new user
    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();
    res
      .status(201)
      .send({ success: true, message: "User created succesfully", newUser });
  } catch (error) {
    res.status(400).send({ success: false, message: "error", error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    //   res.send(user);

    if (!user)
      return res
        .status(400)
        .send({ success: false, message: "Invalid credentials" });

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword)
      return res
        .status(400)
        .send({ success: false, message: "Invalid credentials" });

    const token = generateToken(user.email);
    res.cookie("token", token);
    res.status(201).send({ success: true, message: "Login successfull", user });
  } catch (error) {
    res.status(400).send({ success: false, message: "Error", error });
  }
};

export const logout = (req, res) => {
    res.clearCookie("token");
    res.send({success:true, message: "Logout successful" });
  };
