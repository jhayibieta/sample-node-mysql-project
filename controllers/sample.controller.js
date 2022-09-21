//database connection
const con = require('../services/dbconfig');

//data creation
exports.createData = function(req, res) {
    con.query(`INSERT INTO users(name, email, password, createdAt, updatedAt) VALUES ('${req.body.name}','${req.body.email}','${req.body.password}','${new Date()}','${new Date()}')`, (err) => {
        if(err) throw err;
        res.status(200).json({
            response: "POST API successfully working" 
         });
    })  
}

//data fetching / data viewing
exports.getAllData = function(req, res) {
    con.query("SELECT * FROM users",  (err, rows) => {
        if(err) throw err;
        res.status(200).json({
            response: rows 
        });
    })  
}

//get specific data
exports.getData = function(req, res) {
    con.query(`SELECT * FROM users WHERE id = '${req.params.id}'`, (err, rows) => {
        if(err) throw err;
        res.status(200).json({
            response: rows 
        });
    })
}



//data updating
exports.updateAllData = function(req, res) {
    con.query(`UPDATE users SET name = '${req.body.name}', email = '${req.body.email}', password = '${req.body.password}' WHERE id = '${req.params.id}'`, (err) => {
        if(err) throw err;
        res.status(200).json({
            response: "PUT API successfully working" 
        });
    }); 
    
}

//data deletetion
exports.deleteData = function(req, res) {
    con.query(`DELETE FROM users WHERE id = '${req.params.id}'`, (err) => { 
        if(err) throw err;
        res.status(200).json({
            response: "DELETE API successfully working" 
        });
    })
    
}