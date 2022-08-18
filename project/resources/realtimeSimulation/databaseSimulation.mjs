import plantData from "./mockData.js";

var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jkpb5299",
    database: "plantmockdata"

});

// const addData = (data) => {
    con.connect(function(err){
        if (err) throw err;
        console.log("connected");
        var sql = "INSERT INTO plantmockdata.plantdata (id, nutSol, humidity, phVal, temp, waterTemp, waterLevel, lux, timestamps VALUES ?";
        var values = plantData[0];
    })

    con.query(sql, [values], function (err, result){
        if (err) throw err;
        console.log("Records inserted: " + result.affectedRows);
    })
// }



console.log("AAAAAAAAAAAAAAA", plantData[0]); 


const DatabaseSimulation = () => {

    const interval = 1000;
    var increment = 1;


    plantData.forEach(function(el) {
        var run = setTimeout(function() {
      
          // console each element inside array
          console.log(el);
      
          clearTimeout(run);
        }, interval * increment);
      
        increment = increment + 1;
      });
    
    
}


export default DatabaseSimulation;

  