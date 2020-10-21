function myInit(msg, done) {
    console.log("Users plugin initialzied");
    done();
}

module.exports = function users() {
    this.add({
        init: "users"
    }, myInit);

    this.add({
        component: "users",
        action: "validate"
    }, (args, reply) => {
        let userObj = this.make$("users");
        let uname = args.username;
        let pwd = args.password;
        userObj.list$({
            username: uname,
            password: pwd
        }, (err, rows) => {
            if (err) {
                console.log("error in validating user");
                reply(err, {
                    loginStatus: false
                });
            }
            if (rows.length == 1) {
                reply(null, {
                    loginStatus: true
                });
            } else {
                reply(null, {
                    loginStatus: false
                });
            }
        });
    });

    /* Add a new user in DB */
    this.add({
        component: "users",
        action: "add"
    }, (args, reply) => {
        let name = args.name;
        let uname = args.username;
        let pwd = args.password;
        let dbObj = this.make$("users");
        dbObj.name = name;
        dbObj.username = uname;
        dbObj.password = pwd;
        dbObj.list$({
            username: uname
        }, (err, rows) => {
            if (err) {
                reply(err, {
                    saveStatus: false,
                    msg: "error in DB"
                });
            } else {
                if (rows.length == 1) {
                    reply(null, {
                        saveStatus: false,
                        msg: "username is already taken"
                    })
                } else {
                    dbObj.save$((err, result) => {
                        if (err) {
                            console.log("Error in saving new user in DB");
                            reply(err, {
                                saveStatus: false,
                                msg: "error in saving user in DB"
                            });
                        } else {
                            reply(null, {
                                saveStatus: true,
                                msg: "User succesfully registered"
                            });
                        }
                    });
                }
            }
        });
    });
}