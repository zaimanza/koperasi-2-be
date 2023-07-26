const router = require("express").Router();

router.post("/postIn", async (req, res) => {
  try {
    return res.status(200).json({
      message: "fetched_people",
    });
  } catch (error) {
    return res.status(400).json("Internal server problem. Try again later.");
  }
});

module.exports = router;
