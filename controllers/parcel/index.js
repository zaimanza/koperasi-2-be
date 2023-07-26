var router = require("express").Router();

// split up route handling
router.use("/", require("./getAll.controller"));
router.use("/", require("./getById.controller"));
router.use("/", require("./postIn.controller"));
router.use("/", require("./postOut.controller"));

module.exports = router;
