const express = require("express");

var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ message: "Health Check Success" });
});

module.exports = router;
