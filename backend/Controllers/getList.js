import User from "../Model/UserSchema.js";

const getList = async (req, res) => {
  try {
    const list = await User.find();
    if (list) {
      return res.status(200).send(list);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.response.data);
  }
};
export default getList;
