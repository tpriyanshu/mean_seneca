var express = require('express');
var router = express.Router();
var seneca = require('seneca')();
var entities = require('seneca-entity');

seneca.quiet();
seneca.client(9090);
seneca.use(entities);

/* GET products routes. */
router.get('/view', function (req, res, next) {
    seneca.act({
        component: "product",
        action: "view"
    }, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                msg: "could not get"
            })
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

router.get('/filter', function (req, res, next) {
    if (req.query.category) {
        seneca.act({
            component: "product",
            action: "filter",
            category: req.query.category
        }, (err, result) => {
            if (err) {
                console.log(err);
                res.send({
                    msg: "could not get"
                });
            } else {
                res.send(result);
            }
        });
    } else if (req.query.price) {
        seneca.act({
            component: "product",
            action: "filter",
            price: req.query.price
        }, (err, result) => {
            if (err) {
                console.log(err);
                res.send({
                    msg: "could not get"
                });
            } else {
                res.send(result);
            }
        });
    }

});

router.get('/filter/:category', function (req, res, next) {
   seneca.act({
       component: "product",
       action: "filter",
       category: req.params.category
   }, (err, result) => {
       if (err) {
           console.log(err);
           res.send({
               msg: "could not get"
           });
       } else {
           res.send(result);
       }
   });

});

router.post('/add', function (req, res, next) {
    seneca.act({
        component: "product",
        action: "add",
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    }, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                msg: "could not save data"
            });
        } else {
            res.send(result);
        }
    });
});

module.exports = router;