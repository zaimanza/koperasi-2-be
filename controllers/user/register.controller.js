const router = require("express").Router();
const { User } = require("../../database/mongodb.database");

router.post("/register", async (req, res) => {
  try {
    const userModel = await User();
    const body = req.body;

    const isStudentExist =
      (await userModel.find({ studentId: body?.studentId }).count()) > 0;

    if (!isStudentExist) {
      const return_data = await userModel.insertOne(body);

      if (return_data?.acknowledged) {
        return res.status(200).json({
          ...return_data,
        });
      }
    } else {
      return res.status(400).json({
        acknowledged: false,
        message: "Student already exist.",
      });
    }

    return res.status(200).json({
      ...return_data,
      acknowledged: false,
    });
  } catch (error) {
    return res.status(400).json({
      acknowledged: false,
      message: "Internal server problem. Try again later.",
    });
  }
});

module.exports = router;
