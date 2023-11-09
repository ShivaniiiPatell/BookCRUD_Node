const express = require("express");
const router = express.Router();
const bookRouter = require("./bookRoutes");
const userRouter = require("./userRoutes")

router.use("/",userRouter)
router.use("/", bookRouter);


module.exports = router;
