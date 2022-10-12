var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

/* GET home page. */
router.get('/', async function (req, res, next) {
  url = 'https://www.instagram.com/abhyuday911/?__a=1&__d=1'

    fetch(url)
      .then(response => response.json())
      .then(json => {console.log(json),res.send(json)})
      .catch(err => console.error('error:' + err));
});

module.exports = router;