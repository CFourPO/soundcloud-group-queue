/**
 * Created by Home on 11/27/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.use("/", express.static(path.join(__dirname, "../dist")));

module.exports = router;