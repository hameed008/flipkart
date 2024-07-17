import User from "../modules/user-schema.js"

//* Handling User Signup:
export const userSignup = async (req, res) => {
  console.log(req.body)
  try {
    //* Preventing duplicate users:
    const exist = await User.findOne({ username: req.body.username })
    if (exist) {
      return res.status(401).json({ message: 'Username already exist' })
    }
    const user = req.body
    const newUser = new User(user);
    await newUser.save();
    res.send('Data Created Sucessfully')
    //res.status(200).json({ message: user });
  } catch (error) {
    console.log('failed')
    res.status(500).json({ message: error.message })
  }
}

//* Handling User Login:
export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let user = await User.findOne({ username: username, password: password })
    if (user) {
      return res.status(200).json({ data: user })
    } else {
      return res.status(401).json('Invalid Login')
    }

  } catch (error) {
    res.status(501).json('Error', error.message)
  }

}