const router = require("express").Router();
const { Parcel } = require("../../database/mongodb.database");
// Example:
// {
//   "parcelId": "123",
//   "password": "12345"
// }
router.put("/out", async (req, res) => {
  try {
    const parcelModel = await Parcel();

    const body = req.body;

    const isParcelData = await parcelModel.findOne({
      parcelId: body.parcelId,
    });
    if (!isParcelData) {
      return res.status(400).json({
        acknowledged: false,
        message: "Parcel does not exist.",
      });
    } else {
      const fetchedParcel = (
        await parcelModel.findOneAndUpdate(
          isParcelData,
          { $set: body },
          { returnNewDocument: true }
        )
      ).value;

      return res.status(200).json({
        ...fetchedParcel,
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
