/**
 * Created by championswimmer on 10/03/17.
 */
const router = require('express').Router();

router.use('/users', require('./api/users'));

module.exports = router;