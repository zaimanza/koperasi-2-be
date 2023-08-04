const router = require("express").Router();
const { Parcel } = require("../../database/mongodb.database");
// Example: http://localhost:5000/parcel/getById?parcelId=64c1e9c71f8e51e418dc5ca8
router.get("/", async (req, res) => {
  try {
    const parcelModel = await Parcel();
    const query = req.query;

    const isParcelData = await parcelModel.find(query).toArray();

    return res.status(200).json(isParcelData);
  } catch (error) {
    return res.status(400).json({
      acknowledged: false,
      message: "Internal server problem. Try again later.",
    });
  }
});

module.exports = router;
