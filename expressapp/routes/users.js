const express = require('express');
const seneca = require('seneca')();
const entities = require('seneca-entity');
const router = express.Router();

seneca.quiet();
seneca.client(9091);
seneca.use(entities);

/* GET users listing. */

router.post('/validate', function (req, res, next) {
  let uname = req.body.username;
  let pwd = req.body.password;
  seneca.act({
    component: "users",
    action: "validate",
    username: uname,
    password: pwd
  }, (err, result) => {
    if (err) {
      console.log(err);
      res.send(result);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

router.post('/add', function (req, res, next) {
  seneca.act({
    component: "users",
    action: "add",
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  }, (err, result) => {
    if (err) {
      console.log(err);
      res.send({
        saveStatus: false
      });
    } else {
      res.send(result);
    }
  });
});

module.exports = router;