function insertIntoDb(buttonType, text, anon, email){
    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "107.180.1.16",
    user: "summer2020group2",
    password: "!!Group2",
    database: "summer2020group2"
    });

    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
    var sql = "INSERT INTO surveyResponses (buttonClicked, feedback, anonymous, email) VALUES (buttonType, text, anon, email)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    });


}

