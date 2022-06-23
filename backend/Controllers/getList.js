import User from "../Model/UserSchema.js";

const getList=async(req,res)=>{
try {
    const list= await User.find()
    if(list)
    {
        console.log(list);
        return res.status(200).send(list)
    }
} catch (error) {
    console.log(error);
    return res.status(400).send("Users List")

}
}
export default getList;