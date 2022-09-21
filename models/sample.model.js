const con = require('../services/dbconfig');

const Sample = function(sample) {
    this.name = sample.name;
    this.email = sample.email;
    this.password = sample.password;
    this.createdAt = this.createdAt;
    this.updatedAt = this.updatedAt;
}

Sample.getDatas = (result) => {
    con.query("SELECT * FROM users", (err, res) => {
        if(err) throw err;
        res.status(200).json({
            response: res 
        });
    })
}

module.exports = Sample;