const express = require('express');
const rezoUserCtrl = require('../controllers/rezoUser');

const router = express.Router();

router.post('/signup', rezoUserCtrl.signup);
router.post('/login', rezoUserCtrl.login)

module.exports = router;