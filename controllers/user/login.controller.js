const router = require("express").Router();
const { User } = require("../../database/mongodb.database");
// Example:
// {
//   "studentId": "123",
//   "password": "12345"
// }
router.post("/login", async (req, res) => {
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
