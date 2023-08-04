var router = require("express").Router();

// split up route handling
router.use("/", require("./get_all.controller"));
router.use("/", require("./get_by_id.controller"));
router.use("/", require("./get_by_phoneNumber.controller"));
router.use("/", require("./in.controller"));
router.use("/", require("./out.controller"));

module.exports = router;
