import express from "express";
import {updateUser,
    deleteUser,
    getUser,
    getUsers} from "../controllers/user.js";
import {verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();
//Token verification
// router.get("/checkauthentication",verifyToken, (req,res,next)=>{
//     res.send("hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged  and you can delete your account")
// })
// router.get("/checkadmin",verifyAdmin, (req,res,next)=>{
//     res.send("hello admin, you are logged  and you can delete all accounts")
// })

//Update
router.put("/:id",verifyUser, updateUser);
//Delete
router.delete("/:id",verifyUser, deleteUser);
//Get
router.get("/:id",verifyUser, getUser);
//Get all
router.get("/",verifyAdmin, getUsers);


export default router;