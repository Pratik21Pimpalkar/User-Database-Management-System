import express from "express";
import registerUser from "../Controllers/registerUser.js";
import updateUser from "../Controllers/updateUser.js";
import deleteUser from "../Controllers/deleteUser.js";
import getList from "../Controllers/getList.js";

const router = express.Router();
router.post("/register", registerUser);
router.post("/update", updateUser);
router.post("/delete", deleteUser);
router.get("/getList", getList)

export default router;
