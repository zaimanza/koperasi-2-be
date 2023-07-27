const router = require("express").Router();
const { User } = require("../../database/mongodb.database");
// Example: http://localhost:5000/user/getById?_id=64c1e9c71f8e51e418dc5ca8
router.get("/getById", async (req, res) => {
  try {
    const userModel = await User();
    const body = req.body;

    const isStudentData = await userModel.findOne(body);

    if (!isStudentData) {
      return res.status(400).json({
        acknowledged: false,
        message: "Student does not exist.",
      });
    } else {
      return res.status(400).json({
        ...isStudentData,
      });
    }
  } catch (error) {
    return res.status(400).json({
      acknowledged: false,
      message: "Internal server problem. Try again later.",
    });
  }
});

module.exports = router;
