var router = require("express").Router();

// split up route handling
router.use("/user", require("./user"));
router.use("/parcel", require("./parcel"));

router.get("/", async (req, res) => {
  try {
    return res.status(200).json("Hi there! API is alive!");
  } catch (error) {
    return res.status(400).json("Internal server problem. Try again later.");
  }
});

module.exports = router;
