const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User')
var fetchuser = require('../middleware/fetchUser')
const router = express.Router();

const JWT_SECERT = "auth1223@#7531";

//adding some validation to req
router.post('/createuser', [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password').isLength({ min: 5 })
],
  async (req, res) => {
    let success = false;
    //errors after validation
    const errors = validationResult(req);

    //if there are some errors in the request then sending the errors as a response
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    try {
      //checking whether a user of request email is unique or not
      let user = await User.findOne({ email: req.body.email });

      //if email is not unique then sending a response with an error.
      if (user) {
        return res.status(400).json({ error: "Sorry a user with this email is already exists" })
      }

      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);
      //if email is unique then creating a user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      })
      // user = new User({
      //   name: req.body.name,
      //     email: req.body.email,
      //     password: securePassword,
      // })
      // let savedUser = await user.save();
      const data = {
        user: {
          id: user.id
        }
      };
      const authtoken = jwt.sign(data, JWT_SECERT);
      console.log(authtoken);
      //sending the authtoken as a response
      success = true;
      return res.json({success, authtoken })
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Something went wrong")
    }
  })
router.post('/login', [
  body('email').isEmail(),
  body('password').exists()
], async (req, res) => {
  let success = false;
  const error = validationResult(req)
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: "Enter valid credentails" });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Enter valid credentails" });
    }
    let comparepassword = await bcrypt.compare(password, user.password);
    if (!comparepassword) {
      return res.status(400).json({ errors: "Enter valid credentials" });
    }
    const data = {
      user: {
        id: user.id
      }
    };
    const authtoken = jwt.sign(data, JWT_SECERT);
    console.log(authtoken);
    //sending the authtoken as a response
    success = true;
    return res.json({ success,authtoken })
  }
  catch (error) {
    return res.status(500).json({ errors: "Internal server error" });
  }
})

router.post('/getUser', [
  body('email').isEmail(),
  body('password').exists()
], fetchuser, async (req, res) => {
  let userid = req.user.id;
  let user = await User.findById(userid).select("-password");
  res.json({ user })
})
module.exports = router