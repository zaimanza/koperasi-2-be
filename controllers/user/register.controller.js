const router = require("express").Router();
const { User } = require("../../database/mongodb.database");
// Example:
// {
//   "studentId": "123",
//   "password": "12345"
// }
router.post("/register", async (req, res) => {
  try {
    const userModel = await User();
    const body = req.body;

    const isStudentExist =
      (await userModel.countDocuments({ studentId: body?.studentId })) > 0;

    if (!isStudentExist) {
      const return_data = await userModel.insertOne(body);
      const isStudentData = await userModel.findOne({
        studentId: body?.studentId,
      });
      if (!isStudentData) {
        return res.status(400).json({
          acknowledged: false,
          message: "Student does not exist.",
        });
      } else {
        return res.status(200).json({
          ...isStudentData,
        });
      }
    } else {
      return res.status(400).json({
        acknowledged: false,
        message: "Student already exist.",
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
