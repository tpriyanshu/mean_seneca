const seneca = require('seneca')();
const entities = require('seneca-entity');

seneca.quiet();
seneca.use(entities);

seneca.use("mongo-store", {
    name: "blossoms",
    host: "127.0.0.1",
    port: 27017
});

seneca.use('product_plugin');

seneca.ready(function (err) {
    // this.act({
    //     component: "product",
    //     action: "view"
    // }, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(result);
    //     }
    // });

    // this.act({
    //     component: "product",
    //     action: "add",
    //     id: 5,
    //     name: "Jasmine Floral",
    //     price: 1232,
    //     category: "Party"
    // }, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(result);
    //     }
    // });

    // seneca.act({
    //     component: "product",
    //     action: "filter",
    //     price: 1000
    // }, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(result);
    //     }
    // });

    this.listen(9090);
});