// const fs = require('fs');
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const port = 3000;
// const app = express();

// // View Engine
// app.set('view engine', 'ejs');
// app.set('views',path.join(__dirname, 'views'));

// // Body Parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/',function(req,res){
//     res.render('index');
// });

// function docFormat(){
//     fs.copyFile('source.txt', 'destination.doc', (err) => {
//     if (err) throw err;
//         console.log('source.txt was copied to destination.txt');
//     });
// }
// docFormat();
// var docxConverter = require('docx-pdf');

// docxConverter('./input.docx','./output.pdf',function(err,result){
// if(err){
//    console.log(err);
//   }
//  console.log('result'+result);
// });

// docxConverter(inputPath,outPath,function(err,result){
// if(err){
// console.log(err);
// }
// console.log('result'+result);
// });

// Convert PDF-TO-DOC
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./test.pdf");

// toPdf(wordBuffer).then(
//   (docBuffer) => {
//     fs.writeFileSync("./test1.doc", docBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )

// Convert PDF-TO-DOCX
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./test.pdf");

// toPdf(wordBuffer).then(
//   (docBuffer) => {
//     fs.writeFileSync("./test1.docx", docBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )
// Convert DOC-to-PDF
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./test.doc");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./test.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )
// Convert DOCX-to-PDF
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./test1.docx");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./test1.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )
// Convert TXT-to-PDF
var toPdf = require("office-to-pdf");
var fs = require("fs");
var wordBuffer = fs.readFileSync("./package.json");

toPdf(wordBuffer).then(
  (pdfBuffer) => {
    fs.writeFileSync("./sag.pdf", pdfBuffer)
  }, (err) => {
    console.log(err);
  }
)
// Convert odp-to-PDF
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./sagar.odp");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./oos.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )
// Convert pptx-to-PDF
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./sagar.odp");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./oos.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )

// Convert PNG-to-JPG
// var Jimp = require('jimp');
 
// // open a file called "lenna.png"
// Jimp.read('./public/images/d.png', (err, lenna) => {
//   if (err) throw err;
//   lenna
//     .resize(256, 556) // resize
//     .quality(60) // set JPEG quality
//     .greyscale() // set greyscale
//     .write('lena-small-bw.tiff'); // save
// });

// app.listen(port,()=>{
//     console.warn('server is Running '+port);
// })