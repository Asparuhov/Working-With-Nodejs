const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(`this is anotha middleware`);
    res.send('<h1> yo express </h1>')
});

module.exports = router;