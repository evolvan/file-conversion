// const express = require('express')
    
// app = express();

let csvToJson = require('convert-csv-to-json');
 
    let fileInputName = './SalesJan2009.csv'; 
    let fileOutputName = './myOutputFile.json';
     
    csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

    // app.listen(5000, () => console.log("Server running on port 5000"));

