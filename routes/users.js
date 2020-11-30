const express = require('express');
const {body, validationResult} = required('express-validator') ;
const createError = require('http-errors') ;
const router = new express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
