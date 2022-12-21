const express = require('express');
const rezoUserCtrl = require('../controllers/rezoUser');

const router = express.Router();

router.post('/signup', rezoUserCtrl.signup);

module.exports = router;