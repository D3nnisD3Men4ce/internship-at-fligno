import plantData from "./mockData.js";


// Checking the MySQL dependency in NPM
var mysql = require('mysql');

// Creating a mysql connection
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "jkpb5299",
   database: "plantmockdata"
});


const interval = 2000;
var increment = 1;

// plantData.forEach(function(el) {
//     var run = setTimeout(function() {
  

//     con.connect(function(err) {
//         if (err) throw err;
//         console.log("DB Connected!");
//         var sql = "INSERT INTO plantmockdata.plantdata (id, timeID, nutSol, phVal, temp, waterTemp, waterLevel, lux, timestamps) VALUES ({plantData[increment]})";
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("Successfully inserted 1 record.");
//         });
//     });

//       clearTimeout(run);
//     }, interval * increment);
  
//     increment = increment + 1;
//   });

// const Test = () => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("DB Connected!");
        var sql = "INSERT INTO plantmockdata.plantdata (id, timeID, nutSol, phVal, temp, waterTemp, waterLevel, lux, timestamps) VALUES ?";
        var values = plantData[increment];
        con.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Successfully inserted 1 record.");
        });
    });
// }

// export default Test;
