import User from "../Model/UserSchema.js";

const deleteUser = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).send("id not found");

  try {
    const user= await User.findOneAndDelete({id})
    return res.status(200).send("User deleted successfully")
    
  } catch (error) {
    return res.status(200).send("Unable to delete user with given id")
    
  }

};

export default deleteUser;
