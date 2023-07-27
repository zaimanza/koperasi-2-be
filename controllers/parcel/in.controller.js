const router = require("express").Router();
const { Parcel } = require("../../database/mongodb.database");
// Example:
// {
//   "parcelId": "123",
//   "password": "12345"
// }
router.post("/in", async (req, res) => {
  try {
    const parcelModel = await Parcel();
    const body = req.body;

    const isParcelExist =
      (await parcelModel.countDocuments({ parcelId: body?.parcelId })) > 0;

    if (!isParcelExist) {
      const return_data = await parcelModel.insertOne(body);

      if (return_data?.acknowledged) {
        return res.status(200).json({
          ...return_data,
        });
      }
    } else {
      return res.status(400).json({
        acknowledged: false,
        message: "Parcel already exist.",
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
