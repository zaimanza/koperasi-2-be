var router = require("express").Router();

// split up route handling
router.use("/", require("./login.controller"));
router.use("/", require("./get_by_id.controller"));
router.use("/", require("./register.controller"));

module.exports = router;
