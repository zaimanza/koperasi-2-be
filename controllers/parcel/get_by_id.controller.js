const router = require("express").Router();
const { Parcel } = require("../../database/mongodb.database");
// Example: http://localhost:5000/parcel/get_by_id?parcelId=64c1e9c71f8e51e418dc5ca8
router.get("/get_by_id", async (req, res) => {
  try {
    const parcelModel = await Parcel();
    const body = req.body;

    const isParcelData = await parcelModel.findOne(body);

    if (!isParcelData) {
      return res.status(400).json({
        acknowledged: false,
        message: "Parcel does not exist.",
      });
    } else {
      return res.status(200).json({
        ...isParcelData,
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
