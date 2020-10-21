function init(msg, done) {
    console.log("Product Plugin initialized");
    done();
}

module.exports = function product() {
    this.add({
        component: "product",
        action: "add"
    }, (args, reply) => {
        let productObj = this.make$("products");
        productObj.id = parseInt(args.id);
        productObj.name = args.name;
        productObj.price = parseInt(args.price);
        productObj.category = args.category;
        productObj.save$((err, resp) => {
            if (err) {
                console.log(err);
                reply({
                    msg: "could not save"
                }, {});
            } else {
                reply(null, resp);
            }
        });
    });

    this.add({
        component: "product",
        action: "view"
    }, (args, reply) => {
        let productObj = this.make$("products");
        productObj.list$({}, (err, rows) => {
            if (err) {
                console.log(err);
                reply({
                    msg: "error, could not fetch"
                }, []);
            } else {
                reply(null, rows);
            }
        })
    });

    this.add({
        component: "product",
        action: "filter",
    }, (args, reply) => {
        if (args.category) {
            let productObj = this.make$("products");
            productObj.list$({
                category: args.category
            }, (err, rows) => {
                if (err) {
                    console.log(err);
                    reply(err, []);
                } else {
                    reply(null, rows);
                }
            })
        } else if (args.price) {
            let productObj = this.make$("products");
            productObj.list$({
                price: {
                    $gte: parseInt(args.price)
                }
            }, (err, rows) => {
                if (err) {
                    console.log(err);
                    reply(err, []);
                } else {
                    reply(null, rows);
                }
            })
        }
    });

    this.add({
        init: "product"
    }, init);
}