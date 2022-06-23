import User from "../Model/UserSchema.js";

const updateUser = async (req, res) => {
  const { id, fname, lname, address,program, marital, country } = req.body;

  if (!id || !fname || !lname || !address|| !program || !marital || !country) {
    return res.status(400).send("Fill all credentials");
  }
  try {
    const exist = await User.findOneAndUpdate({id},{$set:{
    id, fname, lname, address, marital,program, country 
  }});
    await exist.save();
    return res.status(200).send("User update Succesfully")
  } catch (error) {
    console.log(error);
    return res.status(400).send("Something went wrong")
  }

};

export default updateUser;
