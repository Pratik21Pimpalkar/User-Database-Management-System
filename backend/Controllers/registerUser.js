import User from "../Model/UserSchema.js";

const registerUser = async (req, res) => {
  const { id, fname, lname, address, marital, country } = req.body;
    console.log(req.body);
  if (!id || !fname || !lname || !address || !marital || !country) {
    return res.status(400).send("Fill all credentials");
  }
  const exist = await User.findOne({ id });
  if (exist) return res.status(400).send("User with same id already exist.");
  const user = new User({id,fname,lname,address,marital,country,});

  try {
    user.save();
    return res.status(200).send("User register successfully.");
  } catch (error) {
    return res.status(400).send("Something went wrong");
  }
};

export default registerUser;