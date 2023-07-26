var router = require("express").Router();

// split up route handling
router.use("/", require("./login.controller"));
router.use("/", require("./getById.controller"));
router.use("/", require("./register.controller"));

module.exports = router;
