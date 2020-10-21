const seneca = require('seneca')();
const entities = require('seneca-entity');

seneca.quiet();
seneca.use(entities);

seneca.use('mongo-store', {
    name: "blossoms",
    host: "127.0.0.1",
    port: 27017
});
seneca.use('./users_plugin');
seneca.ready(function (err) {
    // seneca.act({
    //     component: "users",
    //     action: "validate",
    //     username: "tpriyanshu",
    //     password: "Hello1234"
    // }, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(result);
    //     }
    // });
    // seneca.act({
    //     component: "users",
    //     action: "add",
    //     name: "test",
    //     username: "test",
    //     password: "Hello1234"
    // }, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(result);
    //     }
    // });
    this.listen(9091);
});